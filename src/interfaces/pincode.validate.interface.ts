// Enums
import { OtpUsageEnum } from '../enums/otp.usage.enum';

export class PincodeValidateInterface {
  email: string;
  usage: OtpUsageEnum;
  pin: string | null;
}
