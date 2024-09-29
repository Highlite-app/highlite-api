import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Interface
import { UserInterface } from '../interfaces/user.interface';

export class FacebookDto {
  @IsNotEmpty()
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  user: UserInterface;
}
