"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationService = void 0;
const common_1 = require("@nestjs/common");
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let CommunicationService = class CommunicationService {
    constructor() {
        this.emailTemplate = path_1.default.resolve(__dirname, '../../templates/email.html');
        this.mailgunClient = new mailgun_js_1.default(form_data_1.default).client({
            username: process.env.MAILGUN_API_USER ? process.env.MAILGUN_API_USER : '',
            key: process.env.MAILGUN_KEY ? process.env.MAILGUN_KEY : '',
        });
    }
    async sendEmail(recipient, sender, subject, content) {
        const response = { statusCode: 200 };
        const emailTemplate = fs_1.default.readFileSync(this.emailTemplate, 'utf8');
        const messageData = {
            from: sender == '' || sender == null ? process.env.MAILGUN_SENDER : sender,
            to: recipient,
            subject: subject,
            html: emailTemplate
                .replace('[content]', content)
                .replaceAll('[CLOUDRONT_DOMAIN]', process.env.CLOUDRONT_DOMAIN ?? ''),
        };
        return await this.mailgunClient.messages
            .create(process.env.MAILGUN_DOMAIN ?? '', messageData)
            .then(() => {
            response.statusCode = 200;
            return response;
        })
            .catch((error) => {
            response.statusCode = common_1.HttpStatus.BAD_REQUEST;
            response.message = [error.message];
            return response;
        });
    }
};
exports.CommunicationService = CommunicationService;
exports.CommunicationService = CommunicationService = __decorate([
    (0, common_1.Injectable)()
], CommunicationService);
//# sourceMappingURL=communication.service.js.map