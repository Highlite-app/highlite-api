import { Controller, Post, Body, ConflictException  } from '@nestjs/common';
import { CreateUserHandler } from './command/create.user.handler';
import { LoginHandler } from './command/login.handler';
import { CreateUserDTO } from 'src/dtos/user/create.user.dto';
import { LoginUserDTO } from 'src/dtos/user/login.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Controller('auth')
@ApiTags("Authentication")
export class AuthController {
  constructor(
    private readonly createUserHandler: CreateUserHandler,
    private readonly loginHandler: LoginHandler,
  ) {}

  @Post('signup')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: UserEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 409, description: 'User with the same name and email already exists.'  })

  async signUp(@Body() createUserDto: CreateUserDTO) {


      const saveUser  =  await this.createUserHandler.execute(createUserDto);

      if(saveUser !=null){
        return {
          status: true ,
          message: "User created successfully" 
       } 
      }else {
        return {
          status: false ,
          message: "User already exist" 
       } 
      }
   
  }

  @Post('oauth-login')
  async oauthLogin(@Body() loginUserDto: LoginUserDTO) {
    return this.loginHandler.execute(loginUserDto);
  }
}
