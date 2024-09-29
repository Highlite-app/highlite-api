import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

// Services
import { IdentityService } from '../../modules/identity/identity.service';

// Interfaces
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable()
export class PincodeLocalStrategy extends PassportStrategy(
  Strategy,
  'pincode-local',
) {
  constructor(private identityService: IdentityService) {
    super({
      usernameField: 'email',
      passwordField: 'pin',
      passReqToCallback: true,
    });
  }

  async validate(request: any, email: string, pin: string): Promise<any> {
    const response: ResponseInterface =
      await this.identityService.validatePincode({
        email,
        pin,
        usage: request.body.usage,
      });

    // Throw error if not authenticated
    if (
      response.statusCode === HttpStatus.BAD_REQUEST ||
      response.statusCode === HttpStatus.UNAUTHORIZED
    ) {
      throw new UnauthorizedException();
    } else {
      return response;
    }
  }
}
