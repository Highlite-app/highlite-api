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
exports.FileManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const file_management_service_1 = require("./file-management.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_s3_config_1 = require("../../configs/multer-s3.config");
const jwt_guard_1 = require("../../security/guards/jwt.guard");
let FileManagementController = class FileManagementController {
    constructor(fileManagementService) {
        this.fileManagementService = fileManagementService;
    }
    upload(file) {
        try {
            if (!file) {
                throw new common_1.BadRequestException('No file provided');
            }
            return JSON.stringify({
                data: [{ key: file.key }],
                statusCode: 200,
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.BadRequestException('Failed to process the file');
            }
        }
    }
};
exports.FileManagementController = FileManagementController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multer_s3_config_1.multerS3Config)),
    (0, swagger_1.ApiTags)('File Management'),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], FileManagementController.prototype, "upload", null);
exports.FileManagementController = FileManagementController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('file-management'),
    __metadata("design:paramtypes", [file_management_service_1.FileManagementService])
], FileManagementController);
//# sourceMappingURL=file-management.controller.js.map