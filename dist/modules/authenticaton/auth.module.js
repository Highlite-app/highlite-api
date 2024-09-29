"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_controller_1 = require("./auth.controller");
const user_schema_1 = require("../../schemas/user.schema");
const jwt_1 = require("@nestjs/jwt");
const jwt_startegy_1 = require("../JwtModule/jwt.startegy");
const passport_1 = require("@nestjs/passport");
const user_repository_impl_1 = require("./user.repository.impl");
const auth_module_1 = require("../JwtModule/auth.module");
const create_user_handler_1 = require("./command/create.user.handler");
const login_handler_1 = require("./command/login.handler");
let AuthsModule = class AuthsModule {
};
exports.AuthsModule = AuthsModule;
exports.AuthsModule = AuthsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }])
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [jwt_1.JwtService, jwt_1.JwtModule, auth_module_1.JWTModule, jwt_startegy_1.JwtStrategy, user_repository_impl_1.UserRepositoryImpl,
            create_user_handler_1.CreateUserHandler, login_handler_1.LoginHandler, {
                provide: 'UserRepository',
                useClass: user_repository_impl_1.UserRepositoryImpl
            }
        ],
        exports: [create_user_handler_1.CreateUserHandler, login_handler_1.LoginHandler]
    })
], AuthsModule);
//# sourceMappingURL=auth.module.js.map