import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";


@ApiTags('Chat')
@Controller('chat')
export class ChatController{

    @Get('websocket-info')
    @ApiOperation({summary: 'Get WebSocket event and usage information'})
    getWebSocketInfo(){
        return {
            event:[{
                name: 'chat_update',
                description:'Triggered when a chat update occurs',
                payload: 'MessageDTO'
            }]
        }
    }


} 