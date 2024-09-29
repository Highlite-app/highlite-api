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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketController = void 0;
const common_1 = require("@nestjs/common");
const bucket_service_1 = require("./bucket.service");
const presigned_request_dto_1 = require("../../dtos/presigned.request.dto");
const swagger_1 = require("@nestjs/swagger");
const url_request_dto_1 = require("../../dtos/url.request.dto");
let BucketController = class BucketController {
    constructor(bucketServie) {
        this.bucketServie = bucketServie;
    }
    async getPresignedUrlWithoutClient(presignedDto) {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrl(presignedDto.fileName, presignedDto.type);
            return {
                status: true,
                data: {
                    message: "URL sucessfully Generated",
                    getPresignedURL: presignedUrl
                }
            };
        }
        catch (error) {
            console.error("Error handling file upload", error);
            throw new common_1.NotFoundException("Failed to handle file upload");
        }
    }
    async createURLForMessagePhoto(fileName) {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(fileName.fileName);
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }
            };
        }
        catch (error) {
            console.error("Error handling file upload", error);
            throw new common_1.NotFoundException("Failed to handle file upload");
        }
    }
    async createURLForMessageVideo(fileName) {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(fileName.fileName);
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }
            };
        }
        catch (error) {
            console.error("Error handling file upload", error);
            throw new common_1.NotFoundException("Failed to handle file upload");
        }
    }
    async createURLForMessageDocument(fileName) {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(fileName.fileName);
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }
            };
        }
        catch (error) {
            console.error("Error handling file upload", error);
            throw new common_1.NotFoundException("Failed to handle file upload");
        }
    }
};
exports.BucketController = BucketController;
__decorate([
    (0, common_1.Post)('getPresignedUrlWithoutClient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [presigned_request_dto_1.PresignedDto]),
    __metadata("design:returntype", Promise)
], BucketController.prototype, "getPresignedUrlWithoutClient", null);
__decorate([
    (0, common_1.Post)('createURLForMessagePhoto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [url_request_dto_1.UrlReqiuestDto]),
    __metadata("design:returntype", Promise)
], BucketController.prototype, "createURLForMessagePhoto", null);
__decorate([
    (0, common_1.Post)('createURLForMessageVideo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [url_request_dto_1.UrlReqiuestDto]),
    __metadata("design:returntype", Promise)
], BucketController.prototype, "createURLForMessageVideo", null);
__decorate([
    (0, common_1.Post)('createURLForMessageDocument'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [url_request_dto_1.UrlReqiuestDto]),
    __metadata("design:returntype", Promise)
], BucketController.prototype, "createURLForMessageDocument", null);
exports.BucketController = BucketController = __decorate([
    (0, common_1.Controller)('S3Bucket'),
    (0, swagger_1.ApiTags)("S3-Bucket"),
    __metadata("design:paramtypes", [bucket_service_1.BucketService])
], BucketController);
//# sourceMappingURL=bucket.controler.js.map