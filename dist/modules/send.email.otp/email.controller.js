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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const swagger_1 = require("@nestjs/swagger");
const email_dto_1 = require("../../dtos/email/email.dto");
const verify_otp_dto_1 = require("../../dtos/email/verify.otp.dto");
const candidate_service_1 = require("../candidate/candidate.service");
const user_type_enum_1 = require("../../enums/user.type.enum");
const send_grid_client_1 = require("./send.grid.client");
let EmailController = class EmailController {
    constructor(emailService, candidateService, sendGridClient) {
        this.emailService = emailService;
        this.candidateService = candidateService;
        this.sendGridClient = sendGridClient;
    }
    async sendEmail(sendEmailDTO) {
        function generateVerificationCode() {
            return Math.floor(100000 + Math.random() * 900000).toString();
        }
        const isCandidateAvailable = await this.candidateService.findCandidateByEmail(sendEmailDTO.recipient);
        if (!isCandidateAvailable) {
            return {
                status: false,
                message: "No account associated with this email address .  Create a new accout before logining in"
            };
        }
        else {
            const verificationCode = generateVerificationCode();
            await this.emailService.sendEmailWithTemplate(sendEmailDTO.recipient, verificationCode);
            return {
                status: true,
                otp: verificationCode,
                message: "Otp send succcesfully to " + sendEmailDTO.recipient,
            };
        }
    }
    async verfifyOtp(verifyOtpDTO) {
        const verifyOtp = await this.emailService.verifyOtp(verifyOtpDTO);
        const candidates = await this.candidateService.findCandidateByEmail(verifyOtpDTO.email);
        if (candidates && verifyOtp != null) {
            await this.sendGridClient.deleteDataFromDatabase(verifyOtp.email);
            return {
                status: true,
                data: {
                    id: candidates?.candidateId,
                    message: "successfully logged in to Highlite",
                    accessToken: "",
                    tokenId: "",
                    refreshToken: "",
                    userType: user_type_enum_1.UserTypeEnum.candidate,
                    isLoggedIn: true,
                }
            };
        }
        else {
            return {
                status: false,
                message: "Invalid OTP"
            };
        }
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('sendEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.SendEmailDTO]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('verifyOtp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDTO]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "verfifyOtp", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('emailAuthentication'),
    (0, swagger_1.ApiTags)('Email Authentication'),
    __metadata("design:paramtypes", [email_service_1.EmailService,
        candidate_service_1.CandidateService,
        send_grid_client_1.SendGridClient])
], EmailController);
//# sourceMappingURL=email.controller.js.map