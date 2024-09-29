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
exports.AmazonKinesisService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const AWS = __importStar(require("aws-sdk"));
const uuid_1 = require("uuid");
let AmazonKinesisService = class AmazonKinesisService {
    constructor() {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESSKEYID,
            secretAccessKey: process.env.AWS_SECRETACCESSKEY,
            region: process.env.AWS_REGION
        });
        this.kinesis = new aws_sdk_1.Kinesis({ region: process.env.AWS_REGION });
        this.dynamoDB = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });
    }
    async putItemtoDynamoDB(tabbleName, item) {
        const params = {
            TableName: tabbleName,
            Item: item
        };
        try {
            await this.dynamoDB.put(params).promise();
            console.log("Item added to DynamoDB table");
        }
        catch (error) {
            console.log("Error adding items to DynamoDB");
            throw error;
        }
    }
    async putRecordToStreamAndMongDB(tableName, streamName, dataDTO) {
        const pk = (0, uuid_1.v4)();
        const params = {
            Data: JSON.stringify(dataDTO.data),
            PartitionKey: pk,
            StreamName: streamName
        };
        try {
            await this.kinesis.putRecord(params).promise();
            console.log("Data Send to Amazon Kinesis for streaming");
            await this.putItemtoDynamoDB(tableName, { ...dataDTO.data, pk });
        }
        catch (error) {
            console.log("Error putting data in Amazon Kinesis");
            throw error;
        }
    }
};
exports.AmazonKinesisService = AmazonKinesisService;
exports.AmazonKinesisService = AmazonKinesisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AmazonKinesisService);
//# sourceMappingURL=amazon.kinesis.service.js.map