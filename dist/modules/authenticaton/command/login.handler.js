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
exports.LoginHandler = void 0;
const common_1 = require("@nestjs/common");
let LoginHandler = class LoginHandler {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(loginUserDto) {
        const { email, providerId, provider } = loginUserDto;
        let user = await this.userRepository.findOneByProviderId(providerId, provider);
        return {
            access_token: "fdjkbnfvjksdvnasnai;ofnvaovnafiovnfabiafnviovnoivnivniofnvfaivagaihvqrut290390fjcdiovmqion",
        };
    }
};
exports.LoginHandler = LoginHandler;
exports.LoginHandler = LoginHandler = __decorate([
    __param(0, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [Object])
], LoginHandler);
//# sourceMappingURL=login.handler.js.map