"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(firstName, email, provider, providerId, userType = 'user') {
        this.firstName = firstName;
        this.email = email;
        this.provider = provider;
        this.providerId = providerId;
        this.userType = userType;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map