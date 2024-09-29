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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailgunService = void 0;
const common_1 = require("@nestjs/common");
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let MailgunService = class MailgunService {
    constructor(mailgunModel) {
        this.mailgunModel = mailgunModel;
        this.emailTemplate = path_1.default.resolve(__dirname, '../../templates/email.html');
        this.MAILGUN_KEY = "69a6bd85-01fde9a6";
        this.MAILGUN_DOMAIN = "highlite.app";
        this.client = new mailgun_js_1.default(FormData).client({
            username: "api",
            key: this.MAILGUN_KEY,
        });
    }
    async sendVerificationEmail(email) {
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const emailTemplate = fs_1.default.readFileSync(this.emailTemplate, 'utf8');
        const data = {
            from: 'Srijan <sandbox4cb17d4ab48a44d7b7939c17e1e81c47.mailgun.org>',
            to: email,
            subject: 'Email Verification',
            text: "Testing in Progress",
            html: `<p>Your OTP for email verification is: ${otp}</p>`,
        };
        return await this.client.messages.create(this.MAILGUN_DOMAIN, data).then((response) => {
            const mailgunInstance = new this.mailgunModel({
                email,
                otp,
                timestamp: new Date(),
            });
            mailgunInstance.save();
            console.log("Inside res");
            console.log(response);
            return response;
        }).catch((error) => {
            console.log("Inside cache error");
            console.error(error.messageData);
            console.error(error.statusCode);
            error.statusCode = common_1.HttpStatus.BAD_REQUEST;
            error.response = [error.message];
            return {
                "message": error.response,
                "statusCode": error.statusCode
            };
        });
    }
};
exports.MailgunService = MailgunService;
exports.MailgunService = MailgunService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('AuthVerfication')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MailgunService);
//# sourceMappingURL=mailgun.service.js.map