import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { CandidateModule } from './modules/candidate/candidate.module';
import { JwtModule } from '@nestjs/jwt';
import { MailgunModules } from './modules/mailgun_email/mailgun.module';
import { DateTimeService } from './services/datetime.service';
import { BucketModule } from './modules/s3-bucket/bucket.module';
import { CompanyModule } from './modules/company/company.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SuperMessagesModule } from './modules/super.message/super-messages.module';
import { AmazonKinesisModule } from './modules/amazon.kinesis/amazon.kinesis.module';
import { LikeModule } from './modules/like-event/like.module';
import { ChatGateway } from './modules/chat/chat.gateway';
import { ChatModule } from './modules/chat/chat.module';
import { AuthsModule } from './modules/authenticaton/auth.module';
import { EmailModule } from './modules/send.email.otp/email.module';
import { UploadCandidateModule } from './modules/upload.candidate.section/upload.candidiate.module';
import { BookmarkModule } from './modules/bookmark/bookmark.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService] 
    }), 
    MongooseModule.forRootAsync({
      useFactory: async(configService: ConfigService) =>({
        uri:configService.get<string>('DATABASE_HOST'),
      }),
      inject: [ConfigService]
    }),
   //  CommunicationModule,
   //  IdentityModule,
   //  FileManagementModule,

   EmailModule, 
   OnboardingModule,
   CandidateModule,
   AuthsModule,
   CompanyModule , 
   BucketModule,
   SuperMessagesModule,
   AmazonKinesisModule,
   LikeModule,
   ChatModule,
   BookmarkModule , 
   UploadCandidateModule,

  
  ],
  controllers: [AppController],
  providers: [AppService , ChatGateway ],
})
export class AppModule {}
