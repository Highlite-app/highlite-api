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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookLocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const identity_service_1 = require("../../modules/identity/identity.service");
let FacebookLocalStrategy = class FacebookLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'facebook-local') {
    constructor(identityService) {
        super({
            usernameField: 'accessToken',
            passwordField: 'accessToken',
            passReqToCallback: true,
        });
        this.identityService = identityService;
    }
    async validate(request, accessToken) {
        try {
            const facebookUrl = process.env.FACEBOOK_PROFILE_URL != undefined
                ? process.env.FACEBOOK_PROFILE_URL
                : '';
            const facebookFields = process.env.FACEBOOK_PROFILE_FIELDS != undefined
                ? process.env.FACEBOOK_PROFILE_FIELDS
                : '';
            if (facebookUrl == '') {
                throw new common_1.HttpException('Missing ENV.FACEBOOK_PROFILE_URL', common_1.HttpStatus.BAD_REQUEST);
            }
            if (facebookFields == '') {
                throw new common_1.HttpException('Missing ENV.FACEBOOK_PROFILE_FIELDS', common_1.HttpStatus.BAD_REQUEST);
            }
            const requestUrl = facebookUrl +
                '?fields=' +
                facebookFields +
                '&access_token=' +
                accessToken;
            const facebook = await axios_1.default.get(requestUrl);
            const identityCheck = await this.identityService.validateFacebook({
                email: facebook.data.email,
                sub: facebook.data.id,
            });
            if (identityCheck.statusCode === common_1.HttpStatus.UNAUTHORIZED) {
                throw new common_1.UnauthorizedException();
            }
            else {
                return identityCheck;
            }
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
};
exports.FacebookLocalStrategy = FacebookLocalStrategy;
exports.FacebookLocalStrategy = FacebookLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], FacebookLocalStrategy);
//# sourceMappingURL=facebook.local.strategy.js.map