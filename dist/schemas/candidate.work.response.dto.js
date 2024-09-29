"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateWorkResponseSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const candidate_work_schema_1 = require("./candidate.work.schema");
exports.CandidateWorkResponseSchema = new mongoose_1.default.Schema({
    items: [{ type: candidate_work_schema_1.CandidateWorkSchema }]
});
//# sourceMappingURL=candidate.work.response.dto.js.map