import { SendGridClient } from './send.grid.client';
import { EmailOtpSchema } from 'src/schemas/email.otp/email.otp.schema';
import { VerifyOtpDTO } from 'src/dtos/email/verify.otp.dto';
export declare class EmailService {
    private readonly sendGridClient;
    constructor(sendGridClient: SendGridClient);
    sendEmailWithTemplate(recipient: string, verificationCode: string): Promise<void>;
    verifyOtp(verifyOtp: VerifyOtpDTO): Promise<EmailOtpSchema | null>;
}
