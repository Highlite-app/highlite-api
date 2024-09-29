import { EmailService } from './email.service';
import { SendEmailDTO } from 'src/dtos/email/email.dto';
import { VerifyOtpDTO } from 'src/dtos/email/verify.otp.dto';
import { CandidateService } from '../candidate/candidate.service';
import { UserTypeEnum } from 'src/enums/user.type.enum';
import { SendGridClient } from './send.grid.client';
export declare class EmailController {
    private readonly emailService;
    private readonly candidateService;
    private readonly sendGridClient;
    constructor(emailService: EmailService, candidateService: CandidateService, sendGridClient: SendGridClient);
    sendEmail(sendEmailDTO: SendEmailDTO): Promise<{
        status: boolean;
        message: string;
        otp?: undefined;
    } | {
        status: boolean;
        otp: string;
        message: string;
    }>;
    verfifyOtp(verifyOtpDTO: VerifyOtpDTO): Promise<{
        status: boolean;
        data: {
            id: string;
            message: string;
            accessToken: string;
            tokenId: string;
            refreshToken: string;
            userType: UserTypeEnum;
            isLoggedIn: boolean;
        };
        message?: undefined;
    } | {
        status: boolean;
        message: string;
        data?: undefined;
    }>;
}
