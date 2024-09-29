import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Interface
import { UserInterface } from '../interfaces/user.interface';

export class AppleDto {
  @IsNotEmpty()
  @ApiProperty()
  authorizationCode: string;
  user: UserInterface;
}
