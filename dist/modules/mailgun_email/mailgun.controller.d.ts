import { MailgunService } from './mailgun.service';
import { EmailDto } from 'src/dtos/email.dto';
export declare class MailgunController {
    private readonly mailgunService;
    constructor(mailgunService: MailgunService);
    sendVerificationEmail(emailDto: EmailDto): Promise<import("mailgun.js").MessagesSendResult | {
        message: any;
        statusCode: any;
    }>;
}
