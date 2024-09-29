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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const send_grid_client_1 = require("./send.grid.client");
let EmailService = class EmailService {
    constructor(sendGridClient) {
        this.sendGridClient = sendGridClient;
    }
    async sendEmailWithTemplate(recipient, verificationCode) {
        console.log("The verfication code" + verificationCode);
        const mail = {
            to: recipient,
            cc: process.env.DEFAULT_EMAIL_ADDRESS,
            from: process.env.EMAIL_SENDER ?? '',
            templateId: process.env.TEMPLATE_ID ?? '',
            dynamicTemplateData: {
                'verification_code': verificationCode
            },
        };
        await this.sendGridClient.send(mail, verificationCode);
    }
    async verifyOtp(verifyOtp) {
        const otpRecord = await this.sendGridClient.findOtpRecordByEmailAndUserType(verifyOtp.email, verifyOtp.userType);
        if (!otpRecord || otpRecord.otp != verifyOtp.otp) {
            return null;
        }
        return otpRecord;
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [send_grid_client_1.SendGridClient])
], EmailService);
//# sourceMappingURL=email.service.js.map