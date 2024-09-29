import { OtpUsageEnum } from '../enums/otp.usage.enum';
import { UserOnboardingInterface } from 'src/interfaces/user.onboarding.interface';
export declare class OtpValidateDto {
    email: string;
    usage: OtpUsageEnum;
    pin: string;
    user: UserOnboardingInterface;
}
