import { HttpStatus, Injectable } from '@nestjs/common';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

// Interfaces
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable()
export class CommunicationService {
  private emailTemplate = path.resolve(__dirname, '../../templates/email.html');
  private mailgunClient = new Mailgun(FormData).client({
    username: process.env.MAILGUN_API_USER ? process.env.MAILGUN_API_USER : '',
    key: process.env.MAILGUN_KEY ? process.env.MAILGUN_KEY : '',
  });
  async sendEmail(
    recipient: string,
    sender: string | null,
    subject: string,
    content: string,
  ) {
    const response: ResponseInterface = { statusCode: 200 };
    const emailTemplate: string = fs.readFileSync(this.emailTemplate, 'utf8');
    const messageData = {
      from:
        sender == '' || sender == null ? process.env.MAILGUN_SENDER : sender,
      to: recipient,
      subject: subject,
      html: emailTemplate
        .replace('[content]', content)
        .replaceAll('[CLOUDRONT_DOMAIN]', process.env.CLOUDRONT_DOMAIN ?? ''),
    };
    return await this.mailgunClient.messages
      .create(process.env.MAILGUN_DOMAIN ?? '', messageData)
      .then(() => {
        response.statusCode = 200;
        return response;
      })
      .catch((error: any) => {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message = [error.message];
        return response;
      });
  }
}
