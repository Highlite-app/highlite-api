"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyJobPostDetailsSchema = exports.CompanyJobPostDetails = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const work_type_enum_1 = require("../../../enums/work.type.enum");
let CompanyJobPostDetails = class CompanyJobPostDetails extends mongoose_2.Document {
};
exports.CompanyJobPostDetails = CompanyJobPostDetails;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "jobPostId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "jobVideoFeedId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "jobDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", Array)
], CompanyJobPostDetails.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", Array)
], CompanyJobPostDetails.prototype, "tools", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "workType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "jobDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: true,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "salary", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Types.ObjectId,
        required: false,
        default: new mongoose_2.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], CompanyJobPostDetails.prototype, "status", void 0);
exports.CompanyJobPostDetails = CompanyJobPostDetails = __decorate([
    (0, mongoose_1.Schema)({ collection: 'company_job_post' })
], CompanyJobPostDetails);
exports.CompanyJobPostDetailsSchema = mongoose_1.SchemaFactory.createForClass(CompanyJobPostDetails);
//# sourceMappingURL=company.job.post.model.js.map