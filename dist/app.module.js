"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const onboarding_module_1 = require("./modules/onboarding/onboarding.module");
const candidate_module_1 = require("./modules/candidate/candidate.module");
const jwt_1 = require("@nestjs/jwt");
const bucket_module_1 = require("./modules/s3-bucket/bucket.module");
const company_module_1 = require("./modules/company/company.module");
const config_1 = require("@nestjs/config");
const super_messages_module_1 = require("./modules/super.message/super-messages.module");
const amazon_kinesis_module_1 = require("./modules/amazon.kinesis/amazon.kinesis.module");
const like_module_1 = require("./modules/like-event/like.module");
const chat_gateway_1 = require("./modules/chat/chat.gateway");
const chat_module_1 = require("./modules/chat/chat.module");
const auth_module_1 = require("./modules/authenticaton/auth.module");
const email_module_1 = require("./modules/send.email.otp/email.module");
const upload_candidiate_module_1 = require("./modules/upload.candidate.section/upload.candidiate.module");
const bookmark_module_1 = require("./modules/bookmark/bookmark.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '1h' },
                }),
                inject: [config_1.ConfigService]
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async (configService) => ({
                    uri: configService.get('DATABASE_HOST'),
                }),
                inject: [config_1.ConfigService]
            }),
            email_module_1.EmailModule,
            onboarding_module_1.OnboardingModule,
            candidate_module_1.CandidateModule,
            auth_module_1.AuthsModule,
            company_module_1.CompanyModule,
            bucket_module_1.BucketModule,
            super_messages_module_1.SuperMessagesModule,
            amazon_kinesis_module_1.AmazonKinesisModule,
            like_module_1.LikeModule,
            chat_module_1.ChatModule,
            bookmark_module_1.BookmarkModule,
            upload_candidiate_module_1.UploadCandidateModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, chat_gateway_1.ChatGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map