"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PincodeSchema = exports.Pincode = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = __importStar(require("mongoose"));
const otp_usage_enum_1 = require("../enums/otp.usage.enum");
let Pincode = class Pincode {
    constructor() {
        this.tokenLifetime = process.env.JWT_PINCODE_LIFETIME_IN_MIN ?? 5;
    }
};
exports.Pincode = Pincode;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId(),
    }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Pincode.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pincode.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, length: 6 }),
    __metadata("design:type", String)
], Pincode.prototype, "pin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pincode.prototype, "usage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: mongoose.now() }),
    __metadata("design:type", Date)
], Pincode.prototype, "creationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: new Date(new Date(mongoose.now()).getTime() +
            parseInt(new Pincode().tokenLifetime.toString()) * 60 * 1000),
    }),
    __metadata("design:type", Date)
], Pincode.prototype, "expirationDate", void 0);
exports.Pincode = Pincode = __decorate([
    (0, mongoose_1.Schema)()
], Pincode);
exports.PincodeSchema = mongoose_1.SchemaFactory.createForClass(Pincode);
//# sourceMappingURL=pincode.schema.js.map