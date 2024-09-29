// src/application/dtos/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserTypeEnum } from 'src/enums/user.type.enum';

export class CreateUserDTO {


  @ApiProperty({ example: 'John', description: 'First name of the user' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'google', description: 'Provider of the user' })
  @IsNotEmpty()
  @IsString()
  provider: string;

  @ApiProperty({ example: '123456', description: 'Provider ID of the user' })
  @IsNotEmpty()
  @IsString()
  providerId: string;

  @ApiProperty({ example: UserTypeEnum.candidate, enum: UserTypeEnum, description: 'Type of the user' })
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  userType: UserTypeEnum;
}
