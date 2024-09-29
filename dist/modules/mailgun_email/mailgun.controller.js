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
exports.MailgunController = void 0;
const common_1 = require("@nestjs/common");
const mailgun_service_1 = require("./mailgun.service");
const email_dto_1 = require("../../dtos/email.dto");
const swagger_1 = require("@nestjs/swagger");
let MailgunController = class MailgunController {
    constructor(mailgunService) {
        this.mailgunService = mailgunService;
    }
    async sendVerificationEmail(emailDto) {
        return this.mailgunService.sendVerificationEmail(emailDto.email);
    }
};
exports.MailgunController = MailgunController;
__decorate([
    (0, common_1.Post)('/verify-email'),
    (0, swagger_1.ApiTags)('Auth-Validation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailDto]),
    __metadata("design:returntype", Promise)
], MailgunController.prototype, "sendVerificationEmail", null);
exports.MailgunController = MailgunController = __decorate([
    (0, common_1.Controller)('onBoarding'),
    __metadata("design:paramtypes", [mailgun_service_1.MailgunService])
], MailgunController);
//# sourceMappingURL=mailgun.controller.js.map