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

// Interfaces
import { ResponseInterface } from '../../interfaces/response.interface';

// Services
import { IdentityService } from '../../modules/identity/identity.service';

@Injectable()
export class FacebookLocalStrategy extends PassportStrategy(
  Strategy,
  'facebook-local',
) {
  constructor(private identityService: IdentityService) {
    super({
      usernameField: 'accessToken',
      passwordField: 'accessToken',
      passReqToCallback: true,
    });
  }

  async validate(request: any, accessToken: string): Promise<any> {
    try {
      const facebookUrl: string =
        process.env.FACEBOOK_PROFILE_URL != undefined
          ? process.env.FACEBOOK_PROFILE_URL
          : '';
      const facebookFields: string =
        process.env.FACEBOOK_PROFILE_FIELDS != undefined
          ? process.env.FACEBOOK_PROFILE_FIELDS
          : '';

      if (facebookUrl == '') {
        throw new HttpException(
          'Missing ENV.FACEBOOK_PROFILE_URL',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (facebookFields == '') {
        throw new HttpException(
          'Missing ENV.FACEBOOK_PROFILE_FIELDS',
          HttpStatus.BAD_REQUEST,
        );
      }

      const requestUrl: string =
        facebookUrl +
        '?fields=' +
        facebookFields +
        '&access_token=' +
        accessToken;
      const facebook: any = await axios.get(requestUrl);

      const identityCheck: ResponseInterface =
        await this.identityService.validateFacebook({
          email: facebook.data.email,
          sub: facebook.data.id,
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
