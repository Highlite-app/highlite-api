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
exports.UploadVideoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UploadVideoDTO {
}
exports.UploadVideoDTO = UploadVideoDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "candidateVideoId", example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec50", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "candidateVideoFeedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candiudate Id required for joining", example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec51", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Candidate Id cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "candidateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candiudate Id required for joining", example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec51", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Candidate Id cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Candiudate Id required for joining", example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec51", required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Candidate Id cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "thumnauilWidth", example: "250", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "thumbNailHeight", example: "350", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "playbackId", example: "somePlayBackUniqueId", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "playbackId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "assetId", example: "someUniqueAssetId", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "uploadId", example: "someUniqueUploadId", required: false }),
    __metadata("design:type", String)
], UploadVideoDTO.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Tags", example: ["Flutter", "Android", "IOS"], required: false }),
    __metadata("design:type", Array)
], UploadVideoDTO.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Catagory", example: ["App Development", "IT Industtry"], required: false }),
    __metadata("design:type", Array)
], UploadVideoDTO.prototype, "category", void 0);
//# sourceMappingURL=upload.video.dto.js.map