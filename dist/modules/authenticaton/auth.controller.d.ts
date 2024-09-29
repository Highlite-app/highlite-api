import { CreateUserHandler } from './command/create.user.handler';
import { LoginHandler } from './command/login.handler';
import { CreateUserDTO } from 'src/dtos/user/create.user.dto';
import { LoginUserDTO } from 'src/dtos/user/login.user.dto';
export declare class AuthController {
    private readonly createUserHandler;
    private readonly loginHandler;
    constructor(createUserHandler: CreateUserHandler, loginHandler: LoginHandler);
    signUp(createUserDto: CreateUserDTO): Promise<{
        status: boolean;
        message: string;
    }>;
    oauthLogin(loginUserDto: LoginUserDTO): Promise<{
        access_token: string;
    }>;
}
