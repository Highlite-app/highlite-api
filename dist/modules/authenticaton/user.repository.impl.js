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
exports.UserRepositoryImpl = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../schemas/user.schema");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
let UserRepositoryImpl = class UserRepositoryImpl {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findOneByEmail(email) {
        const storeUserByEmail = await this.userModel.findOne({ email }).exec();
        if (!storeUserByEmail) {
            return null;
        }
        const providerIds = `${storeUserByEmail.provider}Id`;
        return new user_entity_1.UserEntity(storeUserByEmail.firstName, storeUserByEmail.email, storeUserByEmail.provider, storeUserByEmail.get(providerIds), storeUserByEmail.userType);
    }
    async findOneByProviderId(providerId, provider) {
        const saveUserByProviderId = await this.userModel.findOne({ providerId }).exec();
        if (!saveUserByProviderId) {
            return null;
        }
        const providerIds = `${saveUserByProviderId.provider}Id`;
        return new user_entity_1.UserEntity(saveUserByProviderId.firstName, saveUserByProviderId.email, saveUserByProviderId.provider, saveUserByProviderId.get(providerIds), saveUserByProviderId.userType);
    }
    async save(userEntity) {
        const providerIdField = `${userEntity.provider}Id`;
        const userDoc = new this.userModel({
            firstName: userEntity.firstName,
            email: userEntity.email,
            [providerIdField]: userEntity.providerId,
            provider: userEntity.provider,
            userType: userEntity.userType
        });
        const savedUser = await userDoc.save();
        return new user_entity_1.UserEntity(savedUser.firstName, savedUser.email, savedUser.provider, savedUser.get(providerIdField), savedUser.userType);
    }
};
exports.UserRepositoryImpl = UserRepositoryImpl;
exports.UserRepositoryImpl = UserRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepositoryImpl);
//# sourceMappingURL=user.repository.impl.js.map