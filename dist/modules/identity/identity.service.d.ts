/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../../schemas/user.schema';
import { Pincode } from '../../schemas/pincode.schema';
import { ResponseInterface } from '../../interfaces/response.interface';
import { OtpRequestInterface } from '../../interfaces/otp.request.interface';
import { OtpValidateInterface } from '../../interfaces/otp.validate.interface';
import { PincodeValidateInterface } from '../../interfaces/pincode.validate.interface';
import { GoogleIdentityInterface } from '../../interfaces/google.identity.interface';
import { FacebookIdentityInterface } from '../../interfaces/facebook.identity.interface';
import { AppleIdentityInterface } from '../../interfaces/apple.identity.interface';
import { CommunicationService } from '../communication/communication.service';
import { UserOnboardingInterface } from 'src/interfaces/user.onboarding.interface';
export declare class IdentityService {
    private readonly userModel;
    private readonly pincodeModel;
    private communicationService;
    private jwtService;
    private readonly client;
    constructor(userModel: Model<User>, pincodeModel: Model<Pincode>, communicationService: CommunicationService, jwtService: JwtService, client: OAuth2Client);
    private generateOTP;
    checkUserExistence(email: string): Promise<ResponseInterface>;
    sendPincode(request: OtpRequestInterface): Promise<ResponseInterface>;
    validatePincode(request: OtpValidateInterface): Promise<ResponseInterface>;
    createNewUser(userData: UserOnboardingInterface): Promise<ResponseInterface>;
    generateToken(request: PincodeValidateInterface): Promise<ResponseInterface>;
    validateGoogle(request: GoogleIdentityInterface): Promise<ResponseInterface>;
    validateAndGetGoogleProfile(accessToken: string): Promise<ResponseInterface>;
    isGoogleIdentityExistingAndValid(email: string, googleSub: string): Promise<ResponseInterface>;
    addNewUserIdentity(email: string, identity: string, meta: any): Promise<ResponseInterface>;
    validateFacebook(request: FacebookIdentityInterface): Promise<ResponseInterface>;
    validateAndGetFacebookProfile(accessToken: string): Promise<ResponseInterface>;
    isFacebookIdentityExistingAndValid(email: string, facebookSub: string): Promise<ResponseInterface>;
    validateApple(request: AppleIdentityInterface): Promise<ResponseInterface>;
    validateAndGetAppleProfile(authorizationCode: string): Promise<ResponseInterface>;
    isAppleIdentityExistingAndValid(email: string, appleSub: string): Promise<ResponseInterface>;
    getUserData(sub: string, email: string): Promise<ResponseInterface>;
}
