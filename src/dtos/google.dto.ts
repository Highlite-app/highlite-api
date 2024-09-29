import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Interface
import { UserOnboardingInterface } from '../interfaces/user.onboarding.interface';

export class GoogleDto {
  @IsNotEmpty()
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  user: UserOnboardingInterface;
}
