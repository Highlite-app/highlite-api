import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable } from '@nestjs/common';
import { jwtConfig } from '../../configs/jwt.config';

// Services
import { IdentityService } from '../../modules/identity/identity.service';

// Interface
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly identityService: IdentityService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: any): Promise<any> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };

    if (
      payload?.email == undefined ||
      payload?.email == null ||
      payload?.sub == undefined ||
      payload?.sub == null
    ) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      return response;
    } else {
      const userData: ResponseInterface =
        await this.identityService.getUserData(payload?.sub, payload?.email);

      return userData;
    }
  }
}
