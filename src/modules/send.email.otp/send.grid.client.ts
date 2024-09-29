// // src/email/sendgrid-client.ts

// import { Injectable, Logger } from '@nestjs/common';
// import { MailDataRequired, default as SendGrid } from '@sendgrid/mail';

// @Injectable()
// export class SendGridClient {
//   private logger: Logger;
//   constructor() {
//     //Initialize the logger. This is done for simplicity. You can use a logger service instead
//     this.logger = new Logger(SendGridClient.name);
//     //Get the API key from config service or environment variable
//    // SendGrid.setApiKey(process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY :'' );
//     SendGrid.setApiKey("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");
//   }

//   async send(mail: MailDataRequired): Promise<void> {
//     try {
//       await SendGrid.send(mail);
//       this.logger.log(`Email successfully dispatched to ${mail.to as string}`);
//     } catch (error) {
//       //You can do more with the error
//       this.logger.error('Error while sending email', error);
//       throw error;
//     }
//   }
// }

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MailDataRequired, default as SendGrid } from '@sendgrid/mail';
import { Model } from 'mongoose';
import { UserTypeEnum } from 'src/enums/user.type.enum';
import { EmailOtpSchema } from 'src/schemas/email.otp/email.otp.schema';

@Injectable()
export class SendGridClient {
  private logger: Logger;
  
  constructor(@InjectModel(EmailOtpSchema.name) private readonly otpModel : Model<EmailOtpSchema>) {
    this.logger = new Logger(SendGridClient.name);
    SendGrid.setApiKey(process.env.SEND_GRID_API_KEY ?? '');
  
  }

  private isValidEmail(email: string): boolean {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async findOtpRecordByEmailAndUserType(email: string, userType: string): Promise<EmailOtpSchema | null> {
    return this.otpModel.findOne({ email, userType }).exec();
  }

  async createOtpRecord(otpRecord: { email: string; otp: string; timestamp: Date; userType: string }): Promise<void> {
    const newOtpRecord = new this.otpModel(otpRecord);
    await newOtpRecord.save();
  }

  
  async saveOtpToDatabase(email: string, otp: string, userType: string): Promise<void> {
    const existingOtpRecord = await this.findOtpRecordByEmailAndUserType(email, userType);
  
    if (existingOtpRecord) {
      const currentTime = new Date().getTime();
      const lastRequestTime = new Date(existingOtpRecord.timestamp).getTime();
      
      const requestCooldown = 60 * 1000; // 1 minute cooldown
  
      if (currentTime - lastRequestTime < requestCooldown) {
        throw new Error('OTP request limit exceeded. Please wait before requesting another OTP.');
      }
  
      // Overwrite the existing OTP and timestamp
      existingOtpRecord.otp = otp;
      existingOtpRecord.timestamp = new Date();
      await existingOtpRecord.save();
    } else {
      // Create a new OTP record
      await this.createOtpRecord({ email, otp, timestamp: new Date(), userType });
    }
  }

  async deleteDataFromDatabase(email:string): Promise<void>{
    
    const existingOtpRecord = await this.findOtpRecordByEmailAndUserType(email , UserTypeEnum.candidate) ; 

    if(existingOtpRecord){
      await this.otpModel.deleteOne({email }).exec() ;  
    }else {

      console.log("OTP dosent exist on database")
    }

  


  }

  
  async send(mail: MailDataRequired , verificationCode: string): Promise<void> {
    if (!this.isValidEmail(mail.to as string)) {
      this.logger.error(`Invalid email address: ${mail.to as string}`);
      throw new Error(`Invalid email address: ${mail.to as string}`);
    }

    this.logger.log(`Sending email to ${mail.to as string} with subject "${mail.subject}"`);
    try {
      await SendGrid.send(mail);
       await this.saveOtpToDatabase((mail.to as string), verificationCode , UserTypeEnum.candidate) ; 
      this.logger.log(`Email successfully dispatched to ${mail.to as string}`);

    } catch (error) {
      this.logger.error('Error while sending email', error);
      throw error;
    }
  }


    
}
