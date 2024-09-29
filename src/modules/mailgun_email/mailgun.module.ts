// mailgun.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailgunController } from './mailgun.controller';
import { MailgunService } from './mailgun.service';
import { MailgunSchema } from './mailgun.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AuthVerfication', schema: MailgunSchema }]),
  ],
  controllers: [MailgunController],
  providers: [MailgunService],
})
export class MailgunModules {}
