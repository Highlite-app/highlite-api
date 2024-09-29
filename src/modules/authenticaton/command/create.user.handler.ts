import { ConflictException, Inject } from '@nestjs/common';
import { CreateUserDTO } from '../../../dtos/user/create.user.dto';

import { UserRepository } from '../user.repository ';
import { UserEntity } from '../user.entity';
import { User } from 'src/schemas/user.schema';


export class CreateUserHandler {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute(createUserDto: CreateUserDTO): Promise<User | null> {
    const { firstName , email, provider, providerId, userType } = createUserDto;
    const user = new UserEntity( firstName , email, provider, providerId, userType);
    //check if the user exists 
    const userExist   = await this.userRepository.findOneByEmail(email) ; 
    if(userExist){
     return null  ; 
    }
    return this.userRepository.save(user);
  }
}
