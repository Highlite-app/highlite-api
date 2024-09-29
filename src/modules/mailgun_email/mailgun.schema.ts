// mailgun.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type MailgunDocument = Mailgun & mongoose.Document;

@Schema()
export class Mailgun {  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  otp: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const MailgunSchema = SchemaFactory.createForClass(Mailgun);
