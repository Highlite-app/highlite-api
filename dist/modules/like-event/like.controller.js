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
exports.LikeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const like_service_1 = require("./like.service");
const create_lile_dto_1 = require("../../dtos/like/create.lile.dto");
let LikeController = class LikeController {
    constructor(likeService) {
        this.likeService = likeService;
    }
    async likePost(createLikeDto) {
        try {
            await this.likeService.putRecordToStream(createLikeDto);
            return { message: 'Like Event Sent Successfully ' };
        }
        catch (error) {
            console.error('Failed to send like event', error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                message: "Failed to process like event due to external service unavailability'",
                error: "Unable to process like at this time",
            }, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
};
exports.LikeController = LikeController;
__decorate([
    (0, common_1.Post)("like-service"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lile_dto_1.CreateLikeDTO]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "likePost", null);
exports.LikeController = LikeController = __decorate([
    (0, common_1.Controller)("Like"),
    (0, swagger_1.ApiTags)("Like-stream"),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
//# sourceMappingURL=like.controller.js.map