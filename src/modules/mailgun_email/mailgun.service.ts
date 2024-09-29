// mailgun.service.ts
import { HttpStatus, Injectable } from '@nestjs/common';
import   Mailgun from 'mailgun.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailgunDocument } from './mailgun.schema';
import { response } from 'express';
import fs from 'fs';
import path from 'path';

@Injectable()
export class MailgunService {
  private emailTemplate = path.resolve(__dirname, '../../templates/email.html');
   private   MAILGUN_KEY = "69a6bd85-01fde9a6";
   private MAILGUN_DOMAIN = "highlite.app";
   private client = new Mailgun(FormData).client({
    username: "api",
    key: this.MAILGUN_KEY , 
  
  });

  constructor(@InjectModel('AuthVerfication') private readonly mailgunModel: Model<MailgunDocument>) {}



  async sendVerificationEmail(email: string){
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const emailTemplate: string = fs.readFileSync(this.emailTemplate, 'utf8');
    const data = {
      from: 'Srijan <sandbox4cb17d4ab48a44d7b7939c17e1e81c47.mailgun.org>',
      to: email,
      subject: 'Email Verification',
      text:"Testing in Progress" ,
      html: `<p>Your OTP for email verification is: ${otp}</p>`,
    };

    return  await this.client.messages.create(this.MAILGUN_DOMAIN , data  ).then((response)=>{
    
       const mailgunInstance = new this.mailgunModel({
        email,
        otp,
        timestamp: new Date(),
      });

      mailgunInstance.save();

      console.log("Inside res");
      console.log(response);
       return response ; 
      
     }).catch((error:any)=>{

      console.log("Inside cache error");
      console.error(error.messageData);
      console.error(error.statusCode);
      error.statusCode = HttpStatus.BAD_REQUEST;
      error.response = [error.message]
    
       return {
        "message": error.response , 
        "statusCode": error.statusCode
       }
     })


  }
}
