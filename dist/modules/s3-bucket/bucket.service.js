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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketService = void 0;
const common_1 = require("@nestjs/common");
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const uuid_1 = require("uuid");
let BucketService = class BucketService {
    constructor() {
        this.s3 = new s3_1.default({
            apiVersion: "2006-03-01",
            accessKeyId: process.env.AWS_ACCESSKEYID,
            secretAccessKey: process.env.AWS_SECRETACCESSKEY,
            region: process.env.AWS_REGION,
            signatureVersion: "v4",
        });
    }
    async generatePresignedUrl(fileName, fileType) {
        try {
            const ex = fileName.split("/")[1];
            const Key = `${(0, uuid_1.v4)()}.${ex}`;
            const s3Params = {
                Bucket: process.env.AWS_S3_BUCKETNAME,
                Key: fileName,
                Expires: 1800,
                ContentType: fileType,
            };
            const presignedUrl = await this.s3.getSignedUrl("putObject", s3Params);
            console.log("uploadUrl", presignedUrl);
            return presignedUrl;
        }
        catch (error) {
            console.log("Error generating presigned URL:", error);
            throw new Error("Failed to generate presigned URL");
        }
    }
    async generatePresignedUrlWithClient(fileName) {
        try {
            const s3Params = {
                Bucket: process.env.BUCKET_NAME,
                Key: (0, uuid_1.v4)(),
                Expires: 60,
                ContentType: 'image/png',
            };
            const presignedUrl = await this.s3.getSignedUrl("putObject", s3Params);
            return presignedUrl;
        }
        catch (e) {
            console.log("Error generating generatePresignedUrlWithClient URL:", e);
            throw new Error("Failed to generate generatePresignedUrlWithClient URL");
        }
    }
};
exports.BucketService = BucketService;
exports.BucketService = BucketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BucketService);
//# sourceMappingURL=bucket.service.js.map