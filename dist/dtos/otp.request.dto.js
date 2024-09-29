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
exports.OtpRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const otp_usage_enum_1 = require("../enums/otp.usage.enum");
class OtpRequestDto {
}
exports.OtpRequestDto = OtpRequestDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Enter a valid email to proceed.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Enter an email to proceed.' }),
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'A valid email address of the user',
    }),
    __metadata("design:type", String)
], OtpRequestDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(otp_usage_enum_1.OtpUsageEnum),
    (0, swagger_1.ApiProperty)({
        default: 'onboarding',
        description: `The value is in [${Object.keys(otp_usage_enum_1.OtpUsageEnum)}]`,
    }),
    __metadata("design:type", String)
], OtpRequestDto.prototype, "usage", void 0);
//# sourceMappingURL=otp.request.dto.js.map