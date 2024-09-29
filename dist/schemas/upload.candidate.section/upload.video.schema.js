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
exports.UploadCandidateVideoSchema = exports.UploadCandidateVideo = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_2 = require("@nestjs/mongoose");
let UploadCandidateVideo = class UploadCandidateVideo extends mongoose_1.Document {
};
exports.UploadCandidateVideo = UploadCandidateVideo;
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "candidateVideoFeedId", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "candidateId", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "description", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "playbackId", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", String)
], UploadCandidateVideo.prototype, "uploadId", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", Array)
], UploadCandidateVideo.prototype, "tag", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        default: new mongoose_1.default.Types.ObjectId
    }),
    __metadata("design:type", Array)
], UploadCandidateVideo.prototype, "category", void 0);
exports.UploadCandidateVideo = UploadCandidateVideo = __decorate([
    (0, mongoose_2.Schema)({ collection: "candidate_video_feed" })
], UploadCandidateVideo);
exports.UploadCandidateVideoSchema = mongoose_2.SchemaFactory.createForClass(UploadCandidateVideo);
//# sourceMappingURL=upload.video.schema.js.map