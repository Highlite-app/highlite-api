import { Module } from '@nestjs/common';
import { SuperMessagesController } from './super-messages.controller';


@Module({
  controllers: [SuperMessagesController],
})
export class SuperMessagesModule {}
