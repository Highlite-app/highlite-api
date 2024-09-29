import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserTypeEnum } from 'src/enums/user.type.enum';

@Schema({ collection: 'otp_verification' })
export class EmailOtpSchema  extends Document {

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  otp: string;

  @Prop({
    type: String,
    required: true,
  })
  userType: UserTypeEnum;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  timestamp: Date;
}

export const EmailOtpSchemaFactory = SchemaFactory.createForClass(EmailOtpSchema);
