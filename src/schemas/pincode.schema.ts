import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// Enums
import { OtpUsageEnum } from '../enums/otp.usage.enum';

export type PincodeDocument = mongoose.HydratedDocument<Pincode>;

@Schema()
export class Pincode {
  // Default is 5 mins lifetime
  tokenLifetime: string | number = process.env.JWT_PINCODE_LIFETIME_IN_MIN ?? 5;

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId(),
  })
  _id: mongoose.Types.ObjectId;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true, length: 6 })
  pin: string;
  @Prop({ required: true })
  usage: OtpUsageEnum;
  @Prop({ required: true, default: mongoose.now() })
  creationDate: Date;
  @Prop({
    required: true,
    default: new Date(
      new Date(mongoose.now()).getTime() +
        parseInt(new Pincode().tokenLifetime.toString()) * 60 * 1000,
    ),
  })
  expirationDate: Date;
}

export const PincodeSchema = SchemaFactory.createForClass(Pincode);
