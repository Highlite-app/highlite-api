"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonKinesisModule = void 0;
const common_1 = require("@nestjs/common");
const amazon_kinesis_controller_1 = require("./amazon.kinesis.controller");
const amazon_kinesis_service_1 = require("./amazon.kinesis.service");
const amazon_dyanmo_service_1 = require("./amazon.dyanmo.service");
let AmazonKinesisModule = class AmazonKinesisModule {
};
exports.AmazonKinesisModule = AmazonKinesisModule;
exports.AmazonKinesisModule = AmazonKinesisModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [amazon_kinesis_controller_1.AmazonKinesisController],
        providers: [amazon_kinesis_service_1.AmazonKinesisService, amazon_dyanmo_service_1.AmazonDynamoDBService]
    })
], AmazonKinesisModule);
//# sourceMappingURL=amazon.kinesis.module.js.map