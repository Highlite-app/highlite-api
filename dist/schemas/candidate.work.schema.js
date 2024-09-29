"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateWorkSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CandidateWorkSchema = new mongoose_1.default.Schema({
    id: { type: String },
    userID: { type: String },
    file: [{ type: String }],
    projectTitle: { type: String },
    skills: [{ type: String }],
    tools: [{ type: String }],
    projectDescription: { type: String },
});
//# sourceMappingURL=candidate.work.schema.js.map