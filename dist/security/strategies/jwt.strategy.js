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
exports.JwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const jwt_config_1 = require("../../configs/jwt.config");
const identity_service_1 = require("../../modules/identity/identity.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(identityService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwt_config_1.jwtConfig.secret,
        });
        this.identityService = identityService;
    }
    async validate(payload) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        if (payload?.email == undefined ||
            payload?.email == null ||
            payload?.sub == undefined ||
            payload?.sub == null) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            return response;
        }
        else {
            const userData = await this.identityService.getUserData(payload?.sub, payload?.email);
            return userData;
        }
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map