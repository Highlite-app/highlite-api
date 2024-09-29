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
exports.AppleLocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = require("jsonwebtoken");
const identity_service_1 = require("../../modules/identity/identity.service");
let AppleLocalStrategy = class AppleLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'apple-local') {
    constructor(identityService) {
        super({
            usernameField: 'authorizationCode',
            passwordField: 'authorizationCode',
            passReqToCallback: true,
        });
        this.identityService = identityService;
    }
    async validate(request, authorizationCode) {
        try {
            const appleAuthUrl = process.env.APPLE_AUTH_URL != undefined
                ? process.env.APPLE_AUTH_URL
                : '';
            const appleClientId = process.env.APPLE_CLIENT_ID != undefined
                ? process.env.APPLE_CLIENT_ID
                : '';
            const appleClientSecret = process.env.APPLE_CLIENT_SECRET != undefined
                ? process.env.APPLE_CLIENT_SECRET
                : '';
            if (appleAuthUrl == '') {
                throw new common_1.HttpException('Missing ENV.APPLE_AUTH_URL', common_1.HttpStatus.BAD_REQUEST);
            }
            if (appleClientId == '') {
                throw new common_1.HttpException('Missing ENV.APPLE_CLIENT_ID', common_1.HttpStatus.BAD_REQUEST);
            }
            const appleResponse = await axios_1.default.post(appleAuthUrl, `client_id=${appleClientId}&client_secret=${appleClientSecret}&code=${authorizationCode}&grant_type=authorization_code`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const token = (0, jsonwebtoken_1.decode)(appleResponse.id_token, { complete: true });
            const identityCheck = await this.identityService.validateApple({
                email: token.email,
                sub: token.sub,
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
exports.AppleLocalStrategy = AppleLocalStrategy;
exports.AppleLocalStrategy = AppleLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], AppleLocalStrategy);
//# sourceMappingURL=apple.local.strategy.js.map