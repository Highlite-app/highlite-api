import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';

// Controller
import { IdentityController } from './identity.controller';

// Services
import { IdentityService } from './identity.service';
import { CommunicationService } from '../communication/communication.service';

// Schema
import { UserSchema } from '../../schemas/user.schema';
import { PincodeSchema } from '../../schemas/pincode.schema';

// Strategy
import { PincodeLocalStrategy } from '../../security/strategies/pincode.local.strategy';
import { JwtStrategy } from '../../security/strategies/jwt.strategy';
import { GoogleLocalStrategy } from '../../security/strategies/google.local.strategy';
import { FacebookLocalStrategy } from '../../security/strategies/facebook.local.strategy';
import { AppleLocalStrategy } from '../../security/strategies/apple.local.strategy';

// Configs
import { jwtConfig } from '../../configs/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Pincode', schema: PincodeSchema },
    ]),
    JwtModule.register(jwtConfig),
  ],
  controllers: [IdentityController],
  providers: [
    IdentityService,
    CommunicationService,
    PincodeLocalStrategy,
    JwtStrategy,
    GoogleLocalStrategy,
    OAuth2Client,
    FacebookLocalStrategy,
    AppleLocalStrategy,
  ],
})
export class IdentityModule {}
