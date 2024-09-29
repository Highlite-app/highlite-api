import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperMessage } from './super-message.interface';
import { ApiTags } from '@nestjs/swagger';


@Controller('super-messages')
@ApiTags('Super-Messsage')
export class SuperMessagesController {
  private superMessages: SuperMessage[] = [];

  @Get("GetSuperMessage")
  getAllSuperMessages(): SuperMessage[] {
    return this.superMessages;
  }

  @Post()
  sendSuperMessage(@Body() superMessage: SuperMessage) {
    this.superMessages.push(superMessage);
    return superMessage;
  }
}
