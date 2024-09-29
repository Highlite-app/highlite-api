import { IdentityService } from './identity.service';
import { OtpRequestDto } from '../../dtos/otp.request.dto';
import { OtpValidateDto } from '../../dtos/otp.validate.dto';
import { PincodeDto } from '../../dtos/pincode.dto';
import { GoogleDto } from '../../dtos/google.dto';
import { FacebookDto } from '../../dtos/facebook.dto';
import { AppleDto } from '../../dtos/apple.dto';
import { ResponseInterface } from '../../interfaces/response.interface';
export declare class IdentityController {
    private identityService;
    constructor(identityService: IdentityService);
    onboardingEmailSendOtp(request: OtpRequestDto): Promise<ResponseInterface>;
    onboardingEmailValidateOtp(request: OtpValidateDto): Promise<ResponseInterface>;
    OnboardingGoogle(request: GoogleDto): Promise<ResponseInterface>;
    OnboardingFacebook(request: FacebookDto): Promise<ResponseInterface>;
    OnboardingApple(request: AppleDto): Promise<ResponseInterface>;
    authenticateOtp(request: PincodeDto): Promise<ResponseInterface>;
    authenticateGoogle(request: any | GoogleDto | ResponseInterface): Promise<ResponseInterface>;
    authenticateFacebook(request: any | FacebookDto | ResponseInterface): Promise<ResponseInterface>;
    authenticateApple(request: any | AppleDto | ResponseInterface): Promise<ResponseInterface>;
    sendPincode(request: OtpRequestDto): Promise<ResponseInterface>;
    getProfile(req: any): any;
}
