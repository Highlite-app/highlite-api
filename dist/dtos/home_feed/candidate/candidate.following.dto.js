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
exports.CandidateFollowingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CandidateFollowingDTO {
}
exports.CandidateFollowingDTO = CandidateFollowingDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Unique identifier of the following instance.' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CandidateFollowingDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'ID of the current user who is following.' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CandidateFollowingDTO.prototype, "currentUserID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'ID of the company associated with the job post.' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CandidateFollowingDTO.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'ID of the job post being followed.' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CandidateFollowingDTO.prototype, "jobPostId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Status of the following instance.' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CandidateFollowingDTO.prototype, "status", void 0);
//# sourceMappingURL=candidate.following.dto.js.map