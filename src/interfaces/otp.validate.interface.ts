// Enums
import { OtpUsageEnum } from '../enums/otp.usage.enum';

export class OtpValidateInterface {
  email: string;
  usage: OtpUsageEnum;
  pin: string;
}
