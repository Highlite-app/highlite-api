// /email/email.service.ts

import { BadRequestException, Injectable } from '@nestjs/common';
import { MailDataRequired } from '@sendgrid/mail';
import { SendGridClient } from './send.grid.client';
import { EmailOtpSchema } from 'src/schemas/email.otp/email.otp.schema';
import { VerifyOtpDTO } from 'src/dtos/email/verify.otp.dto';
import { CandidateAddress } from 'aws-sdk/clients/chime';
import { CandidateService } from '../candidate/candidate.service';


@Injectable()
export class EmailService {
  constructor(private readonly sendGridClient: SendGridClient ) {}

  // async sendTestEmail(recipient: string, body = 'This is a test mail' , subject:string ): Promise<void> {
  //   const mail: MailDataRequired = {
  //     to: recipient,
  //     from: process.env.EMAIL_SENDER ?? ''  , //Approved sender ID in Sendgrid
  //     subject: subject,
  //     content: [{ type: 'text/plain', value: body }],
  //   };
  //   await this.sendGridClient.send(mail);
  // }

  async sendEmailWithTemplate(recipient: string , verificationCode: string): Promise<void> {



  console.log("The verfication code"+verificationCode) ; 
    const mail: MailDataRequired = {
      to: recipient,
      cc: process.env.DEFAULT_EMAIL_ADDRESS, //Assuming you want to send a copy to this email
      from: process.env.EMAIL_SENDER ?? '', //Approved sender ID in Sendgrid
      templateId: process.env.TEMPLATE_ID ?? '', 
       dynamicTemplateData: { 
        'verification_code': verificationCode  // Pass the verification code to the template
      },
    };  
    await this.sendGridClient.send(mail , verificationCode);
  }

  

  async verifyOtp(verifyOtp: VerifyOtpDTO):Promise<EmailOtpSchema | null>{
    const otpRecord = await this.sendGridClient.findOtpRecordByEmailAndUserType(verifyOtp.email ,verifyOtp.userType) ; 
    if(!otpRecord || otpRecord.otp!= verifyOtp.otp){
     return  null ; 
    }
  return otpRecord ; 

  }
}