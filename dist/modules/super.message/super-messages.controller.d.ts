import { SuperMessage } from './super-message.interface';
export declare class SuperMessagesController {
    private superMessages;
    getAllSuperMessages(): SuperMessage[];
    sendSuperMessage(superMessage: SuperMessage): SuperMessage;
}
