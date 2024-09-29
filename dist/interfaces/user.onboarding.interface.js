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
exports.UserOnboardingInterface = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_type_enum_1 = require("../enums/user.type.enum");
const lookingfor_enum_1 = require("../enums/lookingfor.enum");
const work_type_enum_1 = require("../enums/work.type.enum");
const country_enum_1 = require("../enums/country.enum");
class UserOnboardingInterface {
}
exports.UserOnboardingInterface = UserOnboardingInterface;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: user_type_enum_1.UserTypeEnum.candidate,
        description: `The value is in [${Object.values(user_type_enum_1.UserTypeEnum)}]`,
        enum: user_type_enum_1.UserTypeEnum,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "userType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: lookingfor_enum_1.LookingforEnum.looking,
        description: `The value is in [${Object.values(lookingfor_enum_1.LookingforEnum)}]`,
        enum: lookingfor_enum_1.LookingforEnum,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "lookingFor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: (Array),
        default: [],
        description: `The skills of the candidate or the skills a company is looking for`,
    }),
    __metadata("design:type", Array)
], UserOnboardingInterface.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: (Array),
        default: [],
        description: `The tools of the of the candidate or the tools a company is looking for`,
    }),
    __metadata("design:type", Array)
], UserOnboardingInterface.prototype, "tools", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: work_type_enum_1.WorkTypeEnum.both,
        description: `The value is in [${Object.values(work_type_enum_1.WorkTypeEnum)}]`,
        enum: work_type_enum_1.WorkTypeEnum,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "workType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '$50',
        description: `The hourly rate of a candidate`,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The city the user is living in`,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        enum: country_enum_1.CountryEnum,
        default: country_enum_1.CountryEnum.USA,
        description: `The country the user is living`,
    }),
    __metadata("design:type", String)
], UserOnboardingInterface.prototype, "country", void 0);
//# sourceMappingURL=user.onboarding.interface.js.map