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
exports.CandidateHomeFeedDetailsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CandidateHomeFeedDetailsDTO {
}
exports.CandidateHomeFeedDetailsDTO = CandidateHomeFeedDetailsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec52" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "candidateHomeFeedDetailsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec53" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec54" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "candidateVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "4", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "like", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "share", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "3", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "follows", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "3", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "following", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "profileVisit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0", default: "0" }),
    __metadata("design:type", String)
], CandidateHomeFeedDetailsDTO.prototype, "bookmark", void 0);
//# sourceMappingURL=candidate.home.feed.details.dto.js.map