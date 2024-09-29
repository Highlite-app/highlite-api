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
exports.CompanyJobPostVideFeedSchema = exports.CompanyJobPostVideoFeed = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CompanyJobPostVideoFeed = class CompanyJobPostVideoFeed extends mongoose_2.Document {
};
exports.CompanyJobPostVideoFeed = CompanyJobPostVideoFeed;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "jobVideoFeedId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "playbackId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "thumbnailHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "thumbnailWidth", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "uploadId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "jobStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyJobPostVideoFeed.prototype, "companyId", void 0);
exports.CompanyJobPostVideoFeed = CompanyJobPostVideoFeed = __decorate([
    (0, mongoose_1.Schema)({ collection: "company_job_post_video_feed" })
], CompanyJobPostVideoFeed);
exports.CompanyJobPostVideFeedSchema = mongoose_1.SchemaFactory.createForClass(CompanyJobPostVideoFeed);
//# sourceMappingURL=company.job.post.video.feed.js.map