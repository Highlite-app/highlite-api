import { MessageDTO } from "src/dtos/chat/message.dto";
export declare class ChatGateway {
    server: any;
    handleChatUpdate(body: MessageDTO): void;
}
