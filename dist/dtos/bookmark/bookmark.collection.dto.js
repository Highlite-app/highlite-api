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
exports.BookmarkCollectionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const bookmark_info_dto_1 = require("./bookmark.info.dto");
class BookmarkCollectionDTO {
}
exports.BookmarkCollectionDTO = BookmarkCollectionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the Bookmark ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: false }),
    __metadata("design:type", String)
], BookmarkCollectionDTO.prototype, "bookmarkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the User ID , it can be a candidateId or a companyId", example: 'user123', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "User ID cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkCollectionDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "This is the title of the bookmark", example: 'My Bookmark Collection', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Title cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkCollectionDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Flag indicating if the bookmark is deleted", example: 'false', required: true, default: false }),
    (0, class_validator_1.IsNotEmpty)({ message: "IsDeleted cannot be empty" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookmarkCollectionDTO.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "List of bookmark info", type: [bookmark_info_dto_1.BookmarkInfoDTO], required: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => bookmark_info_dto_1.BookmarkInfoDTO),
    __metadata("design:type", Array)
], BookmarkCollectionDTO.prototype, "bookmarkInfo", void 0);
//# sourceMappingURL=bookmark.collection.dto.js.map