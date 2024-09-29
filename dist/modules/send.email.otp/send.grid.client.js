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
var SendGridClient_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridClient = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mail_1 = __importDefault(require("@sendgrid/mail"));
const mongoose_2 = require("mongoose");
const user_type_enum_1 = require("../../enums/user.type.enum");
const email_otp_schema_1 = require("../../schemas/email.otp/email.otp.schema");
let SendGridClient = SendGridClient_1 = class SendGridClient {
    constructor(otpModel) {
        this.otpModel = otpModel;
        this.logger = new common_1.Logger(SendGridClient_1.name);
        mail_1.default.setApiKey(process.env.SEND_GRID_API_KEY ?? '');
    }
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    async findOtpRecordByEmailAndUserType(email, userType) {
        return this.otpModel.findOne({ email, userType }).exec();
    }
    async createOtpRecord(otpRecord) {
        const newOtpRecord = new this.otpModel(otpRecord);
        await newOtpRecord.save();
    }
    async saveOtpToDatabase(email, otp, userType) {
        const existingOtpRecord = await this.findOtpRecordByEmailAndUserType(email, userType);
        if (existingOtpRecord) {
            const currentTime = new Date().getTime();
            const lastRequestTime = new Date(existingOtpRecord.timestamp).getTime();
            const requestCooldown = 60 * 1000;
            if (currentTime - lastRequestTime < requestCooldown) {
                throw new Error('OTP request limit exceeded. Please wait before requesting another OTP.');
            }
            existingOtpRecord.otp = otp;
            existingOtpRecord.timestamp = new Date();
            await existingOtpRecord.save();
        }
        else {
            await this.createOtpRecord({ email, otp, timestamp: new Date(), userType });
        }
    }
    async deleteDataFromDatabase(email) {
        const existingOtpRecord = await this.findOtpRecordByEmailAndUserType(email, user_type_enum_1.UserTypeEnum.candidate);
        if (existingOtpRecord) {
            await this.otpModel.deleteOne({ email }).exec();
        }
        else {
            console.log("OTP dosent exist on database");
        }
    }
    async send(mail, verificationCode) {
        if (!this.isValidEmail(mail.to)) {
            this.logger.error(`Invalid email address: ${mail.to}`);
            throw new Error(`Invalid email address: ${mail.to}`);
        }
        this.logger.log(`Sending email to ${mail.to} with subject "${mail.subject}"`);
        try {
            await mail_1.default.send(mail);
            await this.saveOtpToDatabase(mail.to, verificationCode, user_type_enum_1.UserTypeEnum.candidate);
            this.logger.log(`Email successfully dispatched to ${mail.to}`);
        }
        catch (error) {
            this.logger.error('Error while sending email', error);
            throw error;
        }
    }
};
exports.SendGridClient = SendGridClient;
exports.SendGridClient = SendGridClient = SendGridClient_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(email_otp_schema_1.EmailOtpSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SendGridClient);
//# sourceMappingURL=send.grid.client.js.map