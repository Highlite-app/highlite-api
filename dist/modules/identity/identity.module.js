"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const google_auth_library_1 = require("google-auth-library");
const identity_controller_1 = require("./identity.controller");
const identity_service_1 = require("./identity.service");
const communication_service_1 = require("../communication/communication.service");
const user_schema_1 = require("../../schemas/user.schema");
const pincode_schema_1 = require("../../schemas/pincode.schema");
const pincode_local_strategy_1 = require("../../security/strategies/pincode.local.strategy");
const jwt_strategy_1 = require("../../security/strategies/jwt.strategy");
const google_local_strategy_1 = require("../../security/strategies/google.local.strategy");
const facebook_local_strategy_1 = require("../../security/strategies/facebook.local.strategy");
const apple_local_strategy_1 = require("../../security/strategies/apple.local.strategy");
const jwt_config_1 = require("../../configs/jwt.config");
let IdentityModule = class IdentityModule {
};
exports.IdentityModule = IdentityModule;
exports.IdentityModule = IdentityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Pincode', schema: pincode_schema_1.PincodeSchema },
            ]),
            jwt_1.JwtModule.register(jwt_config_1.jwtConfig),
        ],
        controllers: [identity_controller_1.IdentityController],
        providers: [
            identity_service_1.IdentityService,
            communication_service_1.CommunicationService,
            pincode_local_strategy_1.PincodeLocalStrategy,
            jwt_strategy_1.JwtStrategy,
            google_local_strategy_1.GoogleLocalStrategy,
            google_auth_library_1.OAuth2Client,
            facebook_local_strategy_1.FacebookLocalStrategy,
            apple_local_strategy_1.AppleLocalStrategy,
        ],
    })
], IdentityModule);
//# sourceMappingURL=identity.module.js.map