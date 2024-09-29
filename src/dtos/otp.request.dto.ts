import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Enums
import { OtpUsageEnum } from '../enums/otp.usage.enum';

export class OtpRequestDto {
  @IsEmail({}, { message: 'Enter a valid email to proceed.' })
  @IsNotEmpty({ message: 'Enter an email to proceed.' })
  @ApiProperty({
    required: true,
    description: 'A valid email address of the user',
  })
  email: string;

  @IsEnum(OtpUsageEnum)
  @ApiProperty({
    default: 'onboarding',
    description: `The value is in [${Object.keys(OtpUsageEnum)}]`,
  })
  usage: OtpUsageEnum;
}
