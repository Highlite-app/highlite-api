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
exports.UserInterface = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_interface_1 = require("./company.interface");
const user_type_enum_1 = require("../enums/user.type.enum");
const lookingfor_enum_1 = require("../enums/lookingfor.enum");
const work_type_enum_1 = require("../enums/work.type.enum");
const country_enum_1 = require("../enums/country.enum");
const job_duration_enum_1 = require("../enums/job.duration.enum");
const audio_type_enum_1 = require("../enums/audio.type.enum");
const job_status_enum_1 = require("../enums/job.status.enum");
const country_phone_code_enum_1 = require("../enums/country.phone.code.enum");
class UserInterface {
}
exports.UserInterface = UserInterface;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: user_type_enum_1.UserTypeEnum.candidate,
        description: `The value is in [${Object.values(user_type_enum_1.UserTypeEnum)}]`,
        enum: user_type_enum_1.UserTypeEnum,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "userType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: lookingfor_enum_1.LookingforEnum.looking,
        description: `The value is in [${Object.values(lookingfor_enum_1.LookingforEnum)}]`,
        enum: lookingfor_enum_1.LookingforEnum,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "lookingFor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: (Array),
        default: [],
        description: `The skills of the candidate or the skills a company is looking for`,
    }),
    __metadata("design:type", Array)
], UserInterface.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: (Array),
        default: [],
        description: `The tools of the of the candidate or the tools a company is looking for`,
    }),
    __metadata("design:type", Array)
], UserInterface.prototype, "tools", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: work_type_enum_1.WorkTypeEnum.both,
        description: `The value is in [${Object.values(work_type_enum_1.WorkTypeEnum)}]`,
        enum: work_type_enum_1.WorkTypeEnum,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "workType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '$50',
        description: `The hourly rate of a candidate`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "hourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The city the user is living in`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        enum: country_enum_1.CountryEnum,
        default: country_enum_1.CountryEnum.USA,
        description: `The country the user is living`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: `The user's email address`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: `The user's give name`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's last name`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's @username`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's job title`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "jobTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `A description about the user`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's website`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        enum: job_duration_enum_1.JobDurationEnum,
        default: job_duration_enum_1.JobDurationEnum.both,
        description: `The user's preferred work time`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "workTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        enum: audio_type_enum_1.AudioTypeEnum,
        default: audio_type_enum_1.AudioTypeEnum.both,
        description: `The user's work if call, non-call, or both`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "audioType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Array,
        default: [],
        description: `This is an array of <b>WorkInterface</b>. Check the <b>WorkInterface</b> interface for available properties`,
    }),
    __metadata("design:type", Array)
], UserInterface.prototype, "works", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's profile photo. This is AWS S3 key.`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "profilePhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's profile video. This is AWS S3 key.`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "profileVideo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        enum: job_status_enum_1.JobStatusEnum,
        default: job_status_enum_1.JobStatusEnum.active,
        description: `If the user is active or inactive in the platform`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "jobStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: country_phone_code_enum_1.CountryPhoneCodeEnum.USA,
        enum: country_phone_code_enum_1.CountryPhoneCodeEnum,
        description: `These are United Nations enlisted countries and their 3-letter country codes. The system will map this to their numerical phone codes.`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "phoneCountryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `The user's contact number`,
    }),
    __metadata("design:type", String)
], UserInterface.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        description: `A company's business name. Applicable for company user type`,
    }),
    __metadata("design:type", company_interface_1.CompanyInterface)
], UserInterface.prototype, "company", void 0);
//# sourceMappingURL=user.interface.js.map