"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleLocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const google_strategy_config_1 = require("../../configs/google.strategy.config");
const identity_service_1 = require("../../modules/identity/identity.service");
let GoogleLocalStrategy = class GoogleLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'google-local') {
    constructor(identityService, client) {
        super({
            usernameField: 'accessToken',
            passwordField: 'accessToken',
            passReqToCallback: true,
        });
        this.identityService = identityService;
        this.client = client;
        this.client = new google_auth_library_1.OAuth2Client(google_strategy_config_1.googleStrategyConfig);
    }
    async validate(request, accessToken) {
        try {
            const token = await this.client.getTokenInfo(accessToken);
            const audience = token?.aud;
            const email = token?.email;
            const sub = token?.sub;
            if (audience != undefined &&
                audience != null &&
                audience === google_strategy_config_1.googleStrategyConfig.clientId &&
                email != undefined &&
                email != null &&
                sub != undefined &&
                sub != null) {
                const identityCheck = await this.identityService.validateGoogle({ email, sub });
                if (identityCheck.statusCode === common_1.HttpStatus.UNAUTHORIZED) {
                    throw new common_1.UnauthorizedException();
                }
                else {
                    return identityCheck;
                }
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
};
exports.GoogleLocalStrategy = GoogleLocalStrategy;
exports.GoogleLocalStrategy = GoogleLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        google_auth_library_1.OAuth2Client])
], GoogleLocalStrategy);
//# sourceMappingURL=google.local.strategy.js.map