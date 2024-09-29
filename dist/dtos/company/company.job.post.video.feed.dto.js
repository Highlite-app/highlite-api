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
exports.CompanyJobPostVideoFeedDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CompanyJobPostVideoFeedDTO {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CompanyJobPostVideoFeedDTO = CompanyJobPostVideoFeedDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "jobVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "playbackId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "jobStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeedDTO.prototype, "companyId", void 0);
//# sourceMappingURL=company.job.post.video.feed.dto.js.map