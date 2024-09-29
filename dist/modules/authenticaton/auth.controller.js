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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_user_handler_1 = require("./command/create.user.handler");
const login_handler_1 = require("./command/login.handler");
const create_user_dto_1 = require("../../dtos/user/create.user.dto");
const login_user_dto_1 = require("../../dtos/user/login.user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
let AuthController = class AuthController {
    constructor(createUserHandler, loginHandler) {
        this.createUserHandler = createUserHandler;
        this.loginHandler = loginHandler;
    }
    async signUp(createUserDto) {
        const saveUser = await this.createUserHandler.execute(createUserDto);
        if (saveUser != null) {
            return {
                status: true,
                message: "User created successfully"
            };
        }
        else {
            return {
                status: false,
                message: "User already exist"
            };
        }
    }
    async oauthLogin(loginUserDto) {
        return this.loginHandler.execute(loginUserDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The user has been successfully created.', type: user_entity_1.UserEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'User with the same name and email already exists.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('oauth-login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "oauthLogin", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)("Authentication"),
    __metadata("design:paramtypes", [create_user_handler_1.CreateUserHandler,
        login_handler_1.LoginHandler])
], AuthController);
//# sourceMappingURL=auth.controller.js.map