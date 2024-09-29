  import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckUserDto {
  @IsEmail({}, { message: 'Enter a valid email to proceed.' })
  @IsNotEmpty({ message: 'Enter an email to proceed.' })
  @ApiProperty()
  email: string;
}
