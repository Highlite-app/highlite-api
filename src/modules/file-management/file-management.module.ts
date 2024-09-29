import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { OAuth2Client } from 'google-auth-library';

// Controller

// Services
import { IdentityService } from '../identity/identity.service';
import { FileManagementService } from './file-management.service';
import { CommunicationService } from '../communication/communication.service';

// Strategy
import { JwtStrategy } from '../../security/strategies/jwt.strategy';

// Configs
import { jwtConfig } from '../../configs/jwt.config';

// Schema
import { UserSchema } from '../../schemas/user.schema';
import { PincodeSchema } from '../../schemas/pincode.schema';
import { FileManagementController } from './file-management.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Pincode', schema: PincodeSchema },
    ]),
    JwtModule.register(jwtConfig),
  ],
  controllers: [FileManagementController],
  providers: [
    FileManagementService,
    IdentityService,
    JwtStrategy,
    OAuth2Client,
    CommunicationService,
  ],
})
export class FileManagementModule {}
