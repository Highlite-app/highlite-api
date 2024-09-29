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
exports.OnboardingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let OnboardingController = class OnboardingController {
    async getSplashContent(request) {
        const response = {
            statusCode: common_1.HttpStatus.OK,
            data: [{ messages: [] }],
            message: [],
        };
        if (response.data != undefined) {
            response.data[0].messages?.push("The world's simplest job-matching app.");
            response.data[0].messages?.push('Find your dream job.');
            response.data[0].messages?.push('Hire your rockstar candidate.');
            response.data[0].messages?.push('Get matches in 5 minutes or less.');
        }
        else {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.data = [];
            response.message?.push('Opps, something went wrong. Please try again?');
        }
        return response;
    }
};
exports.OnboardingController = OnboardingController;
__decorate([
    (0, common_1.Get)('splash'),
    (0, swagger_1.ApiTags)('OnBoarding'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "getSplashContent", null);
exports.OnboardingController = OnboardingController = __decorate([
    (0, common_1.Controller)('onBoarding')
], OnboardingController);
//# sourceMappingURL=onboarding.controller.js.map