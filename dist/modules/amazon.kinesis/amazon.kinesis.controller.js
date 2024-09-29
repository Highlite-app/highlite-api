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
exports.AmazonKinesisController = void 0;
const common_1 = require("@nestjs/common");
const amazon_kinesis_service_1 = require("./amazon.kinesis.service");
const swagger_1 = require("@nestjs/swagger");
const data_dto_1 = require("../../dtos/aws.kinesis/data.dto");
const jwt_guard_1 = require("../../security/guards/jwt.guard");
let AmazonKinesisController = class AmazonKinesisController {
    constructor(kinesisService) {
        this.kinesisService = kinesisService;
    }
    async receiveStreamData(dataDto) {
        try {
            const streamName = process.env.AWS_KINESIS_STREAM_NAME ? process.env.AWS_KINESIS_STREAM_NAME : '';
            const tableName = process.env.AWS_DYNAMO_DB_TABLE_NAME ? process.env.AWS_DYNAMO_DB_TABLE_NAME : '';
            await this.kinesisService.putRecordToStreamAndMongDB(tableName, streamName, dataDto);
            return { message: "Stream Data received and send successfully" };
        }
        catch (error) {
            console.log("Error receiving stream data ", error);
        }
    }
};
exports.AmazonKinesisController = AmazonKinesisController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)("stream-data"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [data_dto_1.DataDTO]),
    __metadata("design:returntype", Promise)
], AmazonKinesisController.prototype, "receiveStreamData", null);
exports.AmazonKinesisController = AmazonKinesisController = __decorate([
    (0, common_1.Controller)('stream-data'),
    (0, swagger_1.ApiTags)("Real Time Streaming"),
    __metadata("design:paramtypes", [amazon_kinesis_service_1.AmazonKinesisService])
], AmazonKinesisController);
//# sourceMappingURL=amazon.kinesis.controller.js.map