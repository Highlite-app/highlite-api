"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const communication_controller_1 = require("./communication.controller");
const communication_service_1 = require("./communication.service");
const jwt_config_1 = require("../../configs/jwt.config");
const user_schema_1 = require("../../schemas/user.schema");
const pincode_schema_1 = require("../../schemas/pincode.schema");
let CommunicationModule = class CommunicationModule {
};
exports.CommunicationModule = CommunicationModule;
exports.CommunicationModule = CommunicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Pincode', schema: pincode_schema_1.PincodeSchema },
            ]),
            jwt_1.JwtModule.register(jwt_config_1.jwtConfig),
        ],
        controllers: [communication_controller_1.CommunicationController],
        providers: [communication_service_1.CommunicationService],
    })
], CommunicationModule);
//# sourceMappingURL=communication.module.js.map