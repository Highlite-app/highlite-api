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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerS3Config = void 0;
const multer_s3_1 = __importDefault(require("multer-s3"));
const client_s3_1 = require("@aws-sdk/client-s3");
const aws_config_1 = require("./aws.config");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.multerS3Config = {
    storage: (0, multer_s3_1.default)({
        s3: new client_s3_1.S3Client(aws_config_1.awsConfig),
        bucket: process.env.AWS_S3_BUCKETNAME ? process.env.AWS_S3_BUCKETNAME : '',
        acl: 'public-read',
        key: (req, file, callback) => {
            const bucketFolder = file.mimetype.includes('video')
                ? '/videos'
                : '/images';
            const folder = process.env.AWS_S3_BUCKETFOLDER + bucketFolder;
            const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
            const fileName = `${folder}/${randomName}-${file.originalname}`;
            callback(null, fileName);
        },
    }),
};
//# sourceMappingURL=multer-s3.config.js.map