import { Inject } from '@nestjs/common';
import { LoginUserDTO } from 'src/dtos/user/login.user.dto';
import { UserRepository } from '../user.repository ';
import { UserEntity } from '../user.entity';
import { JwtService } from '@nestjs/jwt';

export class LoginHandler {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  
  ) {}

  async execute(loginUserDto: LoginUserDTO): Promise<{ access_token: string }> {
    const { email, providerId, provider } = loginUserDto;
    let user = await this.userRepository.findOneByProviderId(providerId, provider);

    // if (!user) {
    //   user = await this.userRepository.save(new UserEntity(email, provider, providerId));
    // }

    return {
      access_token: "fdjkbnfvjksdvnasnai;ofnvaovnafiovnfabiafnviovnoivnivniofnvfaivagaihvqrut290390fjcdiovmqion",
    };
  }
}
