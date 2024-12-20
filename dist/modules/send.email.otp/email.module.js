"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const send_grid_client_1 = require("./send.grid.client");
const email_controller_1 = require("./email.controller");
const mongoose_1 = require("@nestjs/mongoose");
const email_otp_schema_1 = require("../../schemas/email.otp/email.otp.schema");
const candidate_module_1 = require("../candidate/candidate.module");
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: email_otp_schema_1.EmailOtpSchema.name, schema: email_otp_schema_1.EmailOtpSchemaFactory }]),
            candidate_module_1.CandidateModule
        ],
        controllers: [email_controller_1.EmailController],
        providers: [email_service_1.EmailService, send_grid_client_1.SendGridClient],
        exports: [email_service_1.EmailService],
    })
], EmailModule);
//# sourceMappingURL=email.module.js.map