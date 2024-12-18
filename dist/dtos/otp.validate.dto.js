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
exports.OtpValidateDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const otp_usage_enum_1 = require("../enums/otp.usage.enum");
const user_onboarding_interface_1 = require("../interfaces/user.onboarding.interface");
class OtpValidateDto {
}
exports.OtpValidateDto = OtpValidateDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Enter a valid email to proceed.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Enter an email to proceed.' }),
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], OtpValidateDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(otp_usage_enum_1.OtpUsageEnum),
    (0, swagger_1.ApiProperty)({
        default: 'onboarding',
    }),
    __metadata("design:type", String)
], OtpValidateDto.prototype, "usage", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], OtpValidateDto.prototype, "pin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", user_onboarding_interface_1.UserOnboardingInterface)
], OtpValidateDto.prototype, "user", void 0);
//# sourceMappingURL=otp.validate.dto.js.map