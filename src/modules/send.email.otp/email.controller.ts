// src/app.controller.ts

import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { SendEmailDTO } from 'src/dtos/email/email.dto';
import { VerifyOtpDTO } from 'src/dtos/email/verify.otp.dto';
import { CandidateService } from '../candidate/candidate.service';
import { UserTypeEnum } from 'src/enums/user.type.enum';
import { SendGridClient } from './send.grid.client';

@Controller('emailAuthentication')
@ApiTags('Email Authentication')
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly candidateService: CandidateService,
    private readonly sendGridClient: SendGridClient,
  ) { }


  @Post('sendEmail')
  async sendEmail(
    @Body() sendEmailDTO: SendEmailDTO,
  ) {

    function generateVerificationCode(): string {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }

    const isCandidateAvailable = await this.candidateService.findCandidateByEmail(sendEmailDTO.recipient);

    if (!isCandidateAvailable) {

      return {
        status: false,
        message: "No account associated with this email address .  Create a new accout before logining in"
      }



    } else {
      const verificationCode = generateVerificationCode();
      await this.emailService.sendEmailWithTemplate(sendEmailDTO.recipient, verificationCode);

      return {
        status: true,
        otp: verificationCode,
        message: "Otp send succcesfully to " + sendEmailDTO.recipient,
      }

    }

  }


  @Post('verifyOtp')
  async verfifyOtp(@Body() verifyOtpDTO: VerifyOtpDTO) {

    const verifyOtp = await this.emailService.verifyOtp(verifyOtpDTO);

    // Retrieve candidateDetails with given email 

    const candidates = await this.candidateService.findCandidateByEmail(verifyOtpDTO.email);


    if (candidates && verifyOtp != null) {



      await this.sendGridClient.deleteDataFromDatabase(verifyOtp.email);
      return {
        status: true,
        data: {
          id: candidates?.candidateId,
          message: "successfully logged in to Highlite",
          accessToken: "",
          tokenId: "",
          refreshToken: "",
          userType: UserTypeEnum.candidate,
          isLoggedIn: true,
        }

      }


    } else {

      return {

        status: false,
        message: "Invalid OTP"

      }


    }
  }

}
