// src/email/email.module.ts

import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendGridClient } from './send.grid.client';
import { EmailController } from './email.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailOtpSchema , EmailOtpSchemaFactory } from 'src/schemas/email.otp/email.otp.schema';
import { CandidateModule } from '../candidate/candidate.module';


@Module({ 
    imports:[

      MongooseModule.forFeature([{name: EmailOtpSchema.name , schema: EmailOtpSchemaFactory}]),
      CandidateModule
    ], 
  
    controllers :[EmailController] , 
  providers: [EmailService, SendGridClient ],
  exports: [EmailService],
})
export class EmailModule {}