import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Enums
import { OtpUsageEnum } from '../enums/otp.usage.enum';

// Interface
import { UserOnboardingInterface } from 'src/interfaces/user.onboarding.interface';

export class OtpValidateDto {
  @IsEmail({}, { message: 'Enter a valid email to proceed.' })
  @IsNotEmpty({ message: 'Enter an email to proceed.' })
  @ApiProperty({
    required: true,
  })
  email: string;

  @IsEnum(OtpUsageEnum)
  @ApiProperty({
    default: 'onboarding',
  })
  usage: OtpUsageEnum;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  pin: string;

  @ApiProperty()
  user: UserOnboardingInterface;
}
