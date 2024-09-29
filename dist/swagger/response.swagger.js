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
exports.ResponseSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class ResponseSwagger {
}
exports.ResponseSwagger = ResponseSwagger;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `The value is in [${common_1.HttpStatus.OK},${common_1.HttpStatus.BAD_REQUEST}]`,
    }),
    __metadata("design:type", Number)
], ResponseSwagger.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This is an array of objects. A member contains the data from a query or parsing.',
    }),
    __metadata("design:type", Array)
], ResponseSwagger.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This is an array of string. A member is one message. This is usually filled up with error messages',
    }),
    __metadata("design:type", Array)
], ResponseSwagger.prototype, "message", void 0);
//# sourceMappingURL=response.swagger.js.map