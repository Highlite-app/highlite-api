import { ApiTags } from "@nestjs/swagger";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { MessageDTO } from "src/dtos/chat/message.dto";

@ApiTags('Chat')
@WebSocketGateway()
export class ChatGateway{
    @WebSocketServer()
    server : any;

    @SubscribeMessage('chat_update') 
    handleChatUpdate(@MessageBody() body: MessageDTO){
        this.server.emit('chat_update',body);
    }
}