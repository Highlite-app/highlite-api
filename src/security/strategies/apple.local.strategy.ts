import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import { decode } from 'jsonwebtoken';

// Interfaces
import { ResponseInterface } from '../../interfaces/response.interface';

// Services
import { IdentityService } from '../../modules/identity/identity.service';

@Injectable()
export class AppleLocalStrategy extends PassportStrategy(
  Strategy,
  'apple-local',
) {
  constructor(private identityService: IdentityService) {
    super({
      usernameField: 'authorizationCode',
      passwordField: 'authorizationCode',
      passReqToCallback: true,
    });
  }

  async validate(request: any, authorizationCode: string): Promise<any> {
    try {
      const appleAuthUrl: string =
        process.env.APPLE_AUTH_URL != undefined
          ? process.env.APPLE_AUTH_URL
          : '';

      const appleClientId: string =
        process.env.APPLE_CLIENT_ID != undefined
          ? process.env.APPLE_CLIENT_ID
          : '';

      const appleClientSecret: string =
        process.env.APPLE_CLIENT_SECRET != undefined
          ? process.env.APPLE_CLIENT_SECRET
          : '';

      if (appleAuthUrl == '') {
        throw new HttpException(
          'Missing ENV.APPLE_AUTH_URL',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (appleClientId == '') {
        throw new HttpException(
          'Missing ENV.APPLE_CLIENT_ID',
          HttpStatus.BAD_REQUEST,
        );
      }

      const appleResponse: any = await axios.post(
        appleAuthUrl,
        `client_id=${appleClientId}&client_secret=${appleClientSecret}&code=${authorizationCode}&grant_type=authorization_code`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      const token: any = decode(appleResponse.id_token, { complete: true });

      const identityCheck: ResponseInterface =
        await this.identityService.validateApple({
          email: token.email,
          sub: token.sub,
        });

      if (identityCheck.statusCode === HttpStatus.UNAUTHORIZED) {
        throw new UnauthorizedException();
      } else {
        return identityCheck;
      }
    } catch (error: any) {
      throw new BadRequestException();
    }
  }
}
