import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { OAuth2Client } from 'google-auth-library';

// Controller
import { CommunicationController } from './communication.controller';

// Services
import { IdentityService } from '../identity/identity.service';
import { CommunicationService } from './communication.service';

// Strategy
import { JwtStrategy } from '../../security/strategies/jwt.strategy';

// Configs
import { jwtConfig } from '../../configs/jwt.config';

// Schema
import { UserSchema } from '../../schemas/user.schema';
import { PincodeSchema } from '../../schemas/pincode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Pincode', schema: PincodeSchema },
    ]),
    JwtModule.register(jwtConfig),
  ],
  controllers: [CommunicationController],
  providers: [CommunicationService],
  //providers: [CommunicationService, IdentityService, JwtStrategy, OAuth2Client],
})
export class CommunicationModule {}
