"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const swagger_1 = require("@nestjs/swagger");
const websockets_1 = require("@nestjs/websockets");
const message_dto_1 = require("../../dtos/chat/message.dto");
let ChatGateway = class ChatGateway {
    handleChatUpdate(body) {
        this.server.emit('chat_update', body);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('chat_update'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.MessageDTO]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleChatUpdate", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, swagger_1.ApiTags)('Chat'),
    (0, websockets_1.WebSocketGateway)()
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map