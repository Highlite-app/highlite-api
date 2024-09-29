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
exports.UploadVideoController = void 0;
const swagger_1 = require("@nestjs/swagger");
const upload_video_service_1 = require("./upload.video.service");
const common_1 = require("@nestjs/common");
const upload_video_dto_1 = require("../../../dtos/upload.candate.section/upload.video/upload.video.dto");
const uuid_1 = require("uuid");
let UploadVideoController = class UploadVideoController {
    constructor(uploadVideService) {
        this.uploadVideService = uploadVideService;
    }
    async uploadCandidateVideo(uploadVideoDTO) {
        try {
            const uploadVideoID = (0, uuid_1.v4)();
            const uploadVideo = this.uploadVideService.uploadCandidateVideo(uploadVideoDTO, uploadVideoID);
            return {
                status: 200,
                candidateVideoId: uploadVideoID
            };
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw new common_1.HttpException('Failed to upload video ', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCandudateVideoByCandidateId(candidateId) {
        try {
            const getCandidateVideoByCandidateId = this.uploadVideService.getAllCandidateVideByCandidateId(candidateId);
            return getCandidateVideoByCandidateId;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to get CandidateVideoFeed from CandidateId.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UploadVideoController = UploadVideoController;
__decorate([
    (0, common_1.Post)('uploadVideo'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Resume Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Resume with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_video_dto_1.UploadVideoDTO]),
    __metadata("design:returntype", Promise)
], UploadVideoController.prototype, "uploadCandidateVideo", null);
__decorate([
    (0, common_1.Get)('getCandidateVideoByCandidateId/:candidateId'),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadVideoController.prototype, "getCandudateVideoByCandidateId", null);
exports.UploadVideoController = UploadVideoController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)("Upload-Candidate-Video"),
    __metadata("design:paramtypes", [upload_video_service_1.UploadVideService])
], UploadVideoController);
//# sourceMappingURL=upload.video.controller.js.map