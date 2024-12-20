import { Module } from "@nestjs/common";
import { ChatController } from "./chat.controller";
import { ChatGateway } from "./chat.gateway";

@Module({
    imports: [],
     controllers: [ChatController] , 
     providers:[ChatGateway]
})
export class ChatModule{}