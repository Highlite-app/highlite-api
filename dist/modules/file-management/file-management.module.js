"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManagementModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const google_auth_library_1 = require("google-auth-library");
const identity_service_1 = require("../identity/identity.service");
const file_management_service_1 = require("./file-management.service");
const communication_service_1 = require("../communication/communication.service");
const jwt_strategy_1 = require("../../security/strategies/jwt.strategy");
const jwt_config_1 = require("../../configs/jwt.config");
const user_schema_1 = require("../../schemas/user.schema");
const pincode_schema_1 = require("../../schemas/pincode.schema");
const file_management_controller_1 = require("./file-management.controller");
let FileManagementModule = class FileManagementModule {
};
exports.FileManagementModule = FileManagementModule;
exports.FileManagementModule = FileManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Pincode', schema: pincode_schema_1.PincodeSchema },
            ]),
            jwt_1.JwtModule.register(jwt_config_1.jwtConfig),
        ],
        controllers: [file_management_controller_1.FileManagementController],
        providers: [
            file_management_service_1.FileManagementService,
            identity_service_1.IdentityService,
            jwt_strategy_1.JwtStrategy,
            google_auth_library_1.OAuth2Client,
            communication_service_1.CommunicationService,
        ],
    })
], FileManagementModule);
//# sourceMappingURL=file-management.module.js.map