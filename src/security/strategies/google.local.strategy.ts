import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

// Configuration
import { googleStrategyConfig } from '../../configs/google.strategy.config';

// Interfaces
import { ResponseInterface } from '../../interfaces/response.interface';

// Services
import { IdentityService } from '../../modules/identity/identity.service';

@Injectable()
export class GoogleLocalStrategy extends PassportStrategy(
  Strategy,
  'google-local',
) {
  constructor(
    private identityService: IdentityService,
    private readonly client: OAuth2Client,
  ) {
    super({
      usernameField: 'accessToken',
      passwordField: 'accessToken',
      passReqToCallback: true,
    });
    this.client = new OAuth2Client(googleStrategyConfig);
  }

  async validate(request: any, accessToken: string): Promise<any> {
    try {
      const token: any = await this.client.getTokenInfo(accessToken);

      // Validate token
      const audience: string | undefined | null = token?.aud;
      const email: string | undefined | null = token?.email;
      const sub: string | undefined | null = token?.sub;

      if (
        audience != undefined &&
        audience != null &&
        audience === googleStrategyConfig.clientId &&
        email != undefined &&
        email != null &&
        sub != undefined &&
        sub != null
      ) {
        const identityCheck: ResponseInterface =
          await this.identityService.validateGoogle({ email, sub });

        if (identityCheck.statusCode === HttpStatus.UNAUTHORIZED) {
          throw new UnauthorizedException();
        } else {
          return identityCheck;
        }
      } else {
        throw new UnauthorizedException();
      }
    } catch (error: any) {
      throw new BadRequestException();
    }
  }
}
