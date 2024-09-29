// mailgun.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MailgunService } from './mailgun.service';
import { EmailDto } from 'src/dtos/email.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('onBoarding')
export class MailgunController {
  constructor(private readonly mailgunService: MailgunService) {}

  @Post('/verify-email')
  @ApiTags('Auth-Validation')
  async sendVerificationEmail(@Body() emailDto : EmailDto) {
    return this.mailgunService.sendVerificationEmail(emailDto.email);
  }
}
