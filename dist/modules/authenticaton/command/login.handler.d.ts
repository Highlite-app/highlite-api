import { LoginUserDTO } from 'src/dtos/user/login.user.dto';
import { UserRepository } from '../user.repository ';
export declare class LoginHandler {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(loginUserDto: LoginUserDTO): Promise<{
        access_token: string;
    }>;
}
