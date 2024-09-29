import { CreateUserDTO } from '../../../dtos/user/create.user.dto';
import { UserRepository } from '../user.repository ';
import { User } from 'src/schemas/user.schema';
export declare class CreateUserHandler {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(createUserDto: CreateUserDTO): Promise<User | null>;
}
