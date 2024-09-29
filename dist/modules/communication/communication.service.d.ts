import { ResponseInterface } from '../../interfaces/response.interface';
export declare class CommunicationService {
    private emailTemplate;
    private mailgunClient;
    sendEmail(recipient: string, sender: string | null, subject: string, content: string): Promise<ResponseInterface>;
}
