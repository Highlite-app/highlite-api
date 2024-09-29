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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const google_auth_library_1 = require("google-auth-library");
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = require("jsonwebtoken");
const google_strategy_config_1 = require("../../configs/google.strategy.config");
const communication_service_1 = require("../communication/communication.service");
let IdentityService = class IdentityService {
    constructor(userModel, pincodeModel, communicationService, jwtService, client) {
        this.userModel = userModel;
        this.pincodeModel = pincodeModel;
        this.communicationService = communicationService;
        this.jwtService = jwtService;
        this.client = client;
        this.client = new google_auth_library_1.OAuth2Client(google_strategy_config_1.googleStrategyConfig);
    }
    generateOTP() {
        const otp = Math.floor(100000 + Math.random() * 900000);
        return otp.toString();
    }
    async checkUserExistence(email) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        try {
            const record = await this.userModel.findOne({ email: email });
            if (record != null) {
                response.data?.push(record);
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async sendPincode(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const pin = this.generateOTP();
        const content = '<table align="center" class="hi_table_2" width="600" >' +
            '<tbody>' +
            '<tr>' +
            '<td class="hi_td_2" width="596">' +
            '<h1 class="hi_text_2">Your Verification Code</h1>' +
            '<p class="hi_sub_text_2">' +
            'Please enter this code to Highlite to verify your email:' +
            '</p>' +
            '<p class="hi_text_3">' +
            pin +
            '</p>' +
            '<p class="hi_text_4">' +
            '<span class="hi_span_1"' +
            '>If you didn&#39;t request this, you can ignore this email or let ' +
            'us know. Contact us at </span' +
            '><span class="hi_span_2">support@highlite.app .</span>' +
            '</p>' +
            '<p class="hi_text_5">Thank you,<br /><br />Highlite Team</p>' +
            '<p class="hi_text_6">' +
            'This is an automated email, please do not reply.' +
            '</p>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
        const pincodeDocument = new this.pincodeModel({
            ...request,
            ...{ pin: pin, _id: new mongoose_2.Types.ObjectId() },
        });
        try {
            const record = await pincodeDocument.save();
            this.communicationService.sendEmail(request.email, null, 'Highlite OTP', content);
            response.data?.push({ pin: pin, document: record });
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validatePincode(request) {
        const query = this.pincodeModel.find();
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        try {
            const record = await query
                .where({
                email: request.email,
                pin: request.pin,
                usage: request.usage,
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
            }
            else {
                if (record.expirationDate < (0, mongoose_2.now)()) {
                    response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
                }
                else {
                    response.statusCode = common_1.HttpStatus.OK;
                }
                await this.pincodeModel.findById(record._id).deleteOne();
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async createNewUser(userData) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const newUser = new this.userModel(userData);
        try {
            const record = await newUser.save();
            response.data?.push(record);
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async generateToken(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        let jwt = '';
        const query = this.userModel.find();
        const record = await query
            .where({
            email: request.email,
        })
            .findOne();
        if (record == null) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            return response;
        }
        else {
            jwt = await this.jwtService.signAsync({
                email: request.email,
                sub: record != undefined ? record._id.toString() : '',
            });
            response.data?.push({ token: jwt });
            return response;
        }
    }
    async validateGoogle(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: request.email,
                identities: {
                    $elemMatch: {
                        identity: 'google',
                        'meta.sub': request.sub,
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
            }
            else {
                response.data?.push(record);
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validateAndGetGoogleProfile(accessToken) {
        try {
            const token = await this.client.getTokenInfo(accessToken);
            const response = {
                statusCode: common_1.HttpStatus.OK,
                data: [],
                message: [],
            };
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
                response.data?.push({ email: email, sub: sub });
                return response;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            console.log(error.message);
            throw new common_1.BadRequestException();
        }
    }
    async isGoogleIdentityExistingAndValid(email, googleSub) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: email,
                identities: {
                    $elemMatch: {
                        identity: 'google',
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.OK;
            }
            else {
                record.identities.forEach((identity) => {
                    if (identity.identity == 'google' &&
                        identity.identity.meta.sub != googleSub) {
                        response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
                    }
                });
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async addNewUserIdentity(email, identity, meta) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        try {
            const updateData = await this.userModel.findOneAndUpdate({
                email,
            }, {
                $push: {
                    identities: {
                        identity,
                        meta,
                    },
                },
            });
            response.data?.push(updateData);
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validateFacebook(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: request.email,
                identities: {
                    $elemMatch: {
                        identity: 'facebook',
                        'meta.sub': request.sub,
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
            }
            else {
                response.data?.push(record);
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validateAndGetFacebookProfile(accessToken) {
        try {
            const response = {
                statusCode: common_1.HttpStatus.OK,
                data: [],
                message: [],
            };
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
            const token = await axios_1.default.get(requestUrl);
            const email = token?.data.email;
            const sub = token?.data.id;
            if (email != undefined &&
                email != null &&
                sub != undefined &&
                sub != null) {
                response.data?.push({ email: email, sub: sub });
                return response;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
    async isFacebookIdentityExistingAndValid(email, facebookSub) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: email,
                identities: {
                    $elemMatch: {
                        identity: 'facebook',
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.OK;
            }
            else {
                record.identities.forEach((identity) => {
                    if (identity.identity == 'facebook' &&
                        identity.identity.meta.sub != facebookSub) {
                        response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
                    }
                });
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validateApple(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: request.email,
                identities: {
                    $elemMatch: {
                        identity: 'apple',
                        'meta.sub': request.sub,
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
            }
            else {
                response.data?.push(record);
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async validateAndGetAppleProfile(authorizationCode) {
        try {
            const response = {
                statusCode: common_1.HttpStatus.OK,
                data: [],
                message: [],
            };
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
            const email = token?.email;
            const sub = token?.sub;
            if (email != undefined &&
                email != null &&
                sub != undefined &&
                sub != null) {
                response.data?.push({ email: email, sub: sub });
                return response;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
    async isAppleIdentityExistingAndValid(email, appleSub) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const query = this.userModel.find();
        try {
            const record = await query
                .where({
                email: email,
                identities: {
                    $elemMatch: {
                        identity: 'apple',
                    },
                },
            })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.OK;
            }
            else {
                record.identities.forEach((identity) => {
                    if (identity.identity == 'apple' &&
                        identity.identity.meta.sub != appleSub) {
                        response.statusCode = common_1.HttpStatus.UNAUTHORIZED;
                    }
                });
            }
            return response;
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
    async getUserData(sub, email) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [],
            message: [],
        };
        const model = this.userModel.find();
        try {
            const record = await model
                .where({ _id: new mongoose_2.Types.ObjectId(sub), email: email })
                .findOne();
            if (record == null) {
                response.statusCode = common_1.HttpStatus.BAD_REQUEST;
                response.message?.push(`No user record for ${email}`);
                return response;
            }
            else {
                response.data?.push(record);
                return response;
            }
        }
        catch (error) {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message?.push(error.message);
            return response;
        }
    }
};
exports.IdentityService = IdentityService;
exports.IdentityService = IdentityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('Pincode')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        communication_service_1.CommunicationService,
        jwt_1.JwtService,
        google_auth_library_1.OAuth2Client])
], IdentityService);
//# sourceMappingURL=identity.service.js.map