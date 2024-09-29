"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailgunModules = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mailgun_controller_1 = require("./mailgun.controller");
const mailgun_service_1 = require("./mailgun.service");
const mailgun_schema_1 = require("./mailgun.schema");
let MailgunModules = class MailgunModules {
};
exports.MailgunModules = MailgunModules;
exports.MailgunModules = MailgunModules = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'AuthVerfication', schema: mailgun_schema_1.MailgunSchema }]),
        ],
        controllers: [mailgun_controller_1.MailgunController],
        providers: [mailgun_service_1.MailgunService],
    })
], MailgunModules);
//# sourceMappingURL=mailgun.module.js.map