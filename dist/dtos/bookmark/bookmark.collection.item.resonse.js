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
exports.BookmarkCollectionItemResponse = void 0;
const bookmark_collection_1 = require("./bookmark.collection");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class BookmarkCollectionItemResponse {
}
exports.BookmarkCollectionItemResponse = BookmarkCollectionItemResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [bookmark_collection_1.BookmarkCollection] }),
    (0, class_transformer_1.Type)(() => bookmark_collection_1.BookmarkCollection),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], BookmarkCollectionItemResponse.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], BookmarkCollectionItemResponse.prototype, "nextToken", void 0);
//# sourceMappingURL=bookmark.collection.item.resonse.js.map