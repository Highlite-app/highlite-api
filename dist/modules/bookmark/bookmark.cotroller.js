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
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bookmark_collection_dto_1 = require("../../dtos/bookmark/bookmark.collection.dto");
const uuid_1 = require("uuid");
const bookmark_service_1 = require("./bookmark.service");
let BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    async getNextToken(nextToken) {
        if (nextToken) {
            return nextToken;
        }
        else {
            const nextTokenID = (0, uuid_1.v4)();
            return nextTokenID;
        }
    }
    async bookmarkDetails(bookmarkCollectionDTO) {
        const bookmarkId = (0, uuid_1.v4)();
        const bookmarkDetails = await this.bookmarkService.bookmark(bookmarkCollectionDTO, bookmarkId);
        return {
            status: 200,
            message: "Bookmark details stored successfuylly"
        };
    }
    async getBookmarkDetails(userId, nextToken) {
        const nextTokenId = await this.getNextToken(nextToken);
        const companyFeedResponse = this.bookmarkService.getBookmarkDetails(userId, nextTokenId);
        return companyFeedResponse;
    }
};
exports.BookmarkController = BookmarkController;
__decorate([
    (0, common_1.Post)('bookmarkDetails'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookmark_collection_dto_1.BookmarkCollectionDTO]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "bookmarkDetails", null);
__decorate([
    (0, common_1.Get)('fetchBookmarkDetails/:userId'),
    (0, swagger_1.ApiQuery)({ name: 'nextToken', required: false }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('nextToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "getBookmarkDetails", null);
exports.BookmarkController = BookmarkController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Bookmark'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
//# sourceMappingURL=bookmark.cotroller.js.map