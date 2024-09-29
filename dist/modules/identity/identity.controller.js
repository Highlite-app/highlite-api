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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const identity_service_1 = require("./identity.service");
const otp_request_dto_1 = require("../../dtos/otp.request.dto");
const otp_validate_dto_1 = require("../../dtos/otp.validate.dto");
const pincode_dto_1 = require("../../dtos/pincode.dto");
const google_dto_1 = require("../../dtos/google.dto");
const facebook_dto_1 = require("../../dtos/facebook.dto");
const apple_dto_1 = require("../../dtos/apple.dto");
const pincode_local_guard_1 = require("../../security/guards/pincode.local.guard");
const jwt_guard_1 = require("../../security/guards/jwt.guard");
const google_local_guard_1 = require("../../security/guards/google.local.guard");
const facebook_local_guard_1 = require("../../security/guards/facebook.local.guard");
const apple_local_guard_1 = require("../../security/guards/apple.local.guard");
const otp_usage_enum_1 = require("../../enums/otp.usage.enum");
const response_swagger_1 = require("../../swagger/response.swagger");
let IdentityController = class IdentityController {
    constructor(identityService) {
        this.identityService = identityService;
    }
    async onboardingEmailSendOtp(request) {
        const response = {
            statusCode: 200,
            data: [],
            message: [],
        };
        const checkUser = await this.identityService.checkUserExistence(request.email);
        if (checkUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
        else {
            if (checkUser?.data != undefined) {
                if (checkUser.data[0] != null) {
                    response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                    response.message?.push('An account already exists with this email address.', 'You can login or try again with a different account?');
                    return response;
                }
                else {
                    const pincode = await this.identityService.sendPincode(request);
                    if (pincode.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                        response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                        response.message?.push('Opps, something went wrong. Please try again?');
                        return response;
                    }
                    else {
                        response.statusCode = common_1.HttpStatus.OK;
                        response.message?.push(`We\'ve sent a code to <b>${request.email}</b><br /><br />Enter your verification code below:`);
                        return response;
                    }
                }
            }
            else {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push('Opps, something went wrong. Please try again?');
                return response;
            }
        }
    }
    async onboardingEmailValidateOtp(request) {
        const response = {
            statusCode: 200,
            data: [],
            message: [],
        };
        const otpCheck = await this.identityService.validatePincode(request);
        if (otpCheck.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
        else if (otpCheck.statusCode === common_1.HttpStatus.UNAUTHORIZED) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('The code you entered is incorrect. Please try again?');
            return response;
        }
        else {
            const newUser = await this.identityService.createNewUser({
                _id: new mongoose_1.Types.ObjectId(),
                userType: request.user.userType,
                lookingFor: request.user.lookingFor,
                skills: request.user.skills,
                tools: request.user.tools,
                workType: request.user.workType,
                hourlyRate: request.user.hourlyRate,
                city: request.user.city,
                country: request.user.country,
                email: request.email,
                identities: [{ identity: 'email', meta: {} }],
            });
            if (newUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push('Opps, something went wrong. Please try again?');
                return response;
            }
            else {
                const token = await this.identityService.generateToken(request);
                if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                    response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                    response.message?.push('Opps, something went wrong. Please try again?');
                    return response;
                }
                else {
                    return token;
                }
            }
        }
    }
    async OnboardingGoogle(request) {
        const response = {
            statusCode: 200,
            data: [],
            message: [],
        };
        const validateRequest = await this.identityService.validateAndGetGoogleProfile(request.accessToken);
        const email = validateRequest.data != undefined ? validateRequest.data[0].email : '';
        const sub = validateRequest.data != undefined ? validateRequest.data[0].sub : '';
        const googleExists = await this.identityService.isGoogleIdentityExistingAndValid(email, sub);
        if (googleExists.statusCode == common_1.HttpStatus.BAD_REQUEST) {
            return googleExists;
        }
        else if (googleExists.statusCode == common_1.HttpStatus.UNAUTHORIZED) {
            throw new common_1.UnauthorizedException();
        }
        const checkUser = await this.identityService.checkUserExistence(email);
        if (checkUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
        else {
            if (checkUser?.data != undefined) {
                if (checkUser.data[0] != null) {
                    const tokenPayload = {
                        email: email,
                        usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                        pin: null,
                    };
                    const userIdentities = await this.identityService.addNewUserIdentity(email, 'google', {
                        sub,
                    });
                    if (userIdentities.statusCode === common_1.HttpStatus.OK) {
                        const token = await this.identityService.generateToken(tokenPayload);
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            token.message?.push('Opps, something went wrong. Please try again?');
                        }
                        return token;
                    }
                    else {
                        return userIdentities;
                    }
                }
                else {
                    const newUser = await this.identityService.createNewUser({
                        _id: new mongoose_1.Types.ObjectId(),
                        userType: request.user.userType,
                        lookingFor: request.user.lookingFor,
                        skills: request.user.skills,
                        tools: request.user.tools,
                        workType: request.user.workType,
                        hourlyRate: request.user.hourlyRate,
                        city: request.user.city,
                        country: request.user.country,
                        email: email,
                        identities: [{ identity: 'google', meta: { sub } }],
                    });
                    if (newUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                        response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                        response.message?.push('Opps, something went wrong. Please try again?');
                        return response;
                    }
                    else {
                        const token = await this.identityService.generateToken({
                            email,
                            usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                            pin: null,
                        });
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                            response.message?.push('Opps, something went wrong. Please try again?');
                            return response;
                        }
                        else {
                            return token;
                        }
                    }
                }
            }
            else {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push('Opps, something went wrong. Please try again?');
                return response;
            }
        }
    }
    async OnboardingFacebook(request) {
        const response = {
            statusCode: 200,
            data: [],
            message: [],
        };
        const validateRequest = await this.identityService.validateAndGetFacebookProfile(request.accessToken);
        const email = validateRequest.data != undefined ? validateRequest.data[0].email : '';
        const sub = validateRequest.data != undefined ? validateRequest.data[0].sub : '';
        const facebookExists = await this.identityService.isFacebookIdentityExistingAndValid(email, sub);
        if (facebookExists.statusCode == common_1.HttpStatus.BAD_REQUEST) {
            return facebookExists;
        }
        else if (facebookExists.statusCode == common_1.HttpStatus.UNAUTHORIZED) {
            throw new common_1.UnauthorizedException();
        }
        const checkUser = await this.identityService.checkUserExistence(email);
        if (checkUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
        else {
            if (checkUser?.data != undefined) {
                if (checkUser.data[0] != null) {
                    const tokenPayload = {
                        email: email,
                        usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                        pin: null,
                    };
                    const userIdentities = await this.identityService.addNewUserIdentity(email, 'facebook', {
                        sub,
                    });
                    if (userIdentities.statusCode === common_1.HttpStatus.OK) {
                        const token = await this.identityService.generateToken(tokenPayload);
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            token.message?.push('Opps, something went wrong. Please try again?');
                        }
                        return token;
                    }
                    else {
                        return userIdentities;
                    }
                }
                else {
                    const newUser = await this.identityService.createNewUser({
                        _id: new mongoose_1.Types.ObjectId(),
                        userType: request.user.userType,
                        lookingFor: request.user.lookingFor,
                        skills: request.user.skills,
                        tools: request.user.tools,
                        workType: request.user.workType,
                        hourlyRate: request.user.hourlyRate,
                        city: request.user.city,
                        country: request.user.country,
                        email: email,
                        identities: [{ identity: 'facebook', meta: { sub } }],
                    });
                    if (newUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                        response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                        response.message?.push('Opps, something went wrong. Please try again?');
                        return response;
                    }
                    else {
                        const token = await this.identityService.generateToken({
                            email,
                            usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                            pin: null,
                        });
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                            response.message?.push('Opps, something went wrong. Please try again?');
                            return response;
                        }
                        else {
                            return token;
                        }
                    }
                }
            }
            else {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push('Opps, something went wrong. Please try again?');
                return response;
            }
        }
    }
    async OnboardingApple(request) {
        const response = {
            statusCode: 200,
            data: [],
            message: [],
        };
        const validateRequest = await this.identityService.validateAndGetAppleProfile(request.authorizationCode);
        const email = validateRequest.data != undefined ? validateRequest.data[0].email : '';
        const sub = validateRequest.data != undefined ? validateRequest.data[0].sub : '';
        const appleExists = await this.identityService.isAppleIdentityExistingAndValid(email, sub);
        if (appleExists.statusCode == common_1.HttpStatus.BAD_REQUEST) {
            return appleExists;
        }
        else if (appleExists.statusCode == common_1.HttpStatus.UNAUTHORIZED) {
            throw new common_1.UnauthorizedException();
        }
        const checkUser = await this.identityService.checkUserExistence(email);
        if (checkUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
        else {
            if (checkUser?.data != undefined) {
                if (checkUser.data[0] != null) {
                    const tokenPayload = {
                        email: email,
                        usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                        pin: null,
                    };
                    const userIdentities = await this.identityService.addNewUserIdentity(email, 'apple', {
                        sub,
                    });
                    if (userIdentities.statusCode === common_1.HttpStatus.OK) {
                        const token = await this.identityService.generateToken(tokenPayload);
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            token.message?.push('Opps, something went wrong. Please try again?');
                        }
                        return token;
                    }
                    else {
                        return userIdentities;
                    }
                }
                else {
                    const newUser = await this.identityService.createNewUser({
                        _id: new mongoose_1.Types.ObjectId(),
                        userType: request.user.userType,
                        lookingFor: request.user.lookingFor,
                        skills: request.user.skills,
                        tools: request.user.tools,
                        workType: request.user.workType,
                        hourlyRate: request.user.hourlyRate,
                        city: request.user.city,
                        country: request.user.country,
                        email: email,
                        identities: [{ identity: 'apple', meta: { sub } }],
                    });
                    if (newUser.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                        response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                        response.message?.push('Opps, something went wrong. Please try again?');
                        return response;
                    }
                    else {
                        const token = await this.identityService.generateToken({
                            email,
                            usage: otp_usage_enum_1.OtpUsageEnum.onboarding,
                            pin: null,
                        });
                        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
                            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                            response.message?.push('Opps, something went wrong. Please try again?');
                            return response;
                        }
                        else {
                            return token;
                        }
                    }
                }
            }
            else {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push('Opps, something went wrong. Please try again?');
                return response;
            }
        }
    }
    async authenticateOtp(request) {
        const token = await this.identityService.generateToken(request);
        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            token.message?.push('Opps, something went wrong. Please try again?');
        }
        return token;
    }
    async authenticateGoogle(request) {
        const tokenPayload = {
            email: request.user.data[0].email,
            usage: otp_usage_enum_1.OtpUsageEnum.login,
            pin: null,
        };
        const token = await this.identityService.generateToken(tokenPayload);
        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            token.message?.push('Opps, something went wrong. Please try again?');
        }
        return token;
    }
    async authenticateFacebook(request) {
        const tokenPayload = {
            email: request.user.data[0].email,
            usage: otp_usage_enum_1.OtpUsageEnum.login,
            pin: null,
        };
        const token = await this.identityService.generateToken(tokenPayload);
        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            token.message?.push('Opps, something went wrong. Please try again?');
        }
        return token;
    }
    async authenticateApple(request) {
        const tokenPayload = {
            email: request.user.data[0].email,
            usage: otp_usage_enum_1.OtpUsageEnum.login,
            pin: null,
        };
        const token = await this.identityService.generateToken(tokenPayload);
        if (token.statusCode === common_1.HttpStatus.BAD_REQUEST) {
            token.message?.push('Opps, something went wrong. Please try again?');
        }
        return token;
    }
    async sendPincode(request) {
        const response = {
            statusCode: 200,
            message: [
                `We\'ve sent a code to <b>${request.email}</b><br /><br />Enter your verification code below:`,
            ],
        };
        const record = await this.identityService.sendPincode(request);
        if (record.statusCode === common_1.HttpStatus.OK) {
            return response;
        }
        else {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push('Opps, something went wrong. Please try again?');
            return response;
        }
    }
    getProfile(req) {
        return req.user;
    }
};
exports.IdentityController = IdentityController;
__decorate([
    (0, swagger_1.ApiTags)('Onboarding'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sends a one-time pin to a user signing up using an email.',
        description: 'Sends a one-time pin to a user signing up using an email.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'The one-time pin is successfully sent to the user.',
        type: response_swagger_1.ResponseSwagger,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'The one-time pin is not sent to the user. Check the <b>message</b> key for the error(s)',
        type: response_swagger_1.ResponseSwagger,
    }),
    (0, common_1.Post)('onboarding/signup/email/send-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_request_dto_1.OtpRequestDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "onboardingEmailSendOtp", null);
__decorate([
    (0, common_1.Post)('onboarding/signup/email/validate-otp'),
    (0, swagger_1.ApiTags)('Onboarding'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_validate_dto_1.OtpValidateDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "onboardingEmailValidateOtp", null);
__decorate([
    (0, common_1.Post)('onboarding/signup/google'),
    (0, swagger_1.ApiTags)('Onboarding'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_dto_1.GoogleDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "OnboardingGoogle", null);
__decorate([
    (0, common_1.Post)('onboarding/signup/facebook'),
    (0, swagger_1.ApiTags)('Onboarding'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facebook_dto_1.FacebookDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "OnboardingFacebook", null);
__decorate([
    (0, common_1.Post)('onboarding/signup/apple'),
    (0, swagger_1.ApiTags)('Onboarding'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apple_dto_1.AppleDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "OnboardingApple", null);
__decorate([
    (0, common_1.UseGuards)(pincode_local_guard_1.PincodeLocalAuthGuard),
    (0, common_1.Post)('authenticate/otp'),
    (0, swagger_1.ApiTags)('Sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pincode_dto_1.PincodeDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "authenticateOtp", null);
__decorate([
    (0, common_1.Post)('authenticate/google'),
    (0, common_1.UseGuards)(google_local_guard_1.GoogleLocalAuthGuard),
    (0, swagger_1.ApiTags)('Sign-in'),
    (0, swagger_1.ApiBody)({ type: google_dto_1.GoogleDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "authenticateGoogle", null);
__decorate([
    (0, common_1.Post)('authenticate/facebook'),
    (0, common_1.UseGuards)(facebook_local_guard_1.FacebookLocalAuthGuard),
    (0, swagger_1.ApiTags)('Sign-in'),
    (0, swagger_1.ApiBody)({ type: facebook_dto_1.FacebookDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "authenticateFacebook", null);
__decorate([
    (0, common_1.Post)('authenticate/apple'),
    (0, common_1.UseGuards)(apple_local_guard_1.AppleLocalAuthGuard),
    (0, swagger_1.ApiTags)('Sign-in'),
    (0, swagger_1.ApiBody)({ type: apple_dto_1.AppleDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "authenticateApple", null);
__decorate([
    (0, common_1.Post)('send-pincode'),
    (0, swagger_1.ApiTags)('Identity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_request_dto_1.OtpRequestDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "sendPincode", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiTags)('Identity'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IdentityController.prototype, "getProfile", null);
exports.IdentityController = IdentityController = __decorate([
    (0, common_1.Controller)('identity'),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], IdentityController);
//# sourceMappingURL=identity.controller.js.map