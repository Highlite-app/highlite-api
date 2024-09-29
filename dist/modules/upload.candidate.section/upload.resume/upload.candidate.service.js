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
exports.UploadCandidateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const upload_about_schema_1 = require("../../../schemas/upload.candidate.section/upload.about.schema");
const upload_education_schema_1 = require("../../../schemas/upload.candidate.section/upload.education.schema");
const upload_employment_schema_1 = require("../../../schemas/upload.candidate.section/upload.employment.schema");
const upload_proejct_schema_1 = require("../../../schemas/upload.candidate.section/upload.proejct.schema");
let UploadCandidateService = class UploadCandidateService {
    constructor(uploadCandidateAboutModel, uploadCandidateProjectModel, uploadCandidateEducationModel, uploadCandidateEmploymentnModel) {
        this.uploadCandidateAboutModel = uploadCandidateAboutModel;
        this.uploadCandidateProjectModel = uploadCandidateProjectModel;
        this.uploadCandidateEducationModel = uploadCandidateEducationModel;
        this.uploadCandidateEmploymentnModel = uploadCandidateEmploymentnModel;
    }
    async createCandidateAbout(uploadAboutDto, aboutId) {
        const existingUser = await this.uploadCandidateAboutModel.findOne({ candidateId: uploadAboutDto.candidateId }).exec();
        const uploadCandidateResume = new this.uploadCandidateAboutModel(uploadAboutDto);
        uploadCandidateResume.aboutId = aboutId;
        const saveUploadCandidateResume = await uploadCandidateResume.save();
        return saveUploadCandidateResume;
    }
    async getCandidateAbout(aboutId) {
        return await this.uploadCandidateAboutModel.findOne({ aboutId }).exec();
    }
    async getCandidateAboutByCandidateId(candidateId) {
        return await this.uploadCandidateAboutModel.findOne({ candidateId }).exec();
    }
    async updateCandidateAbout(aboutId, upldateCandidateAbout) {
        const candidateAbout = await this.uploadCandidateAboutModel.findOne({ aboutId }).exec();
        if (!candidateAbout) {
            throw new common_1.NotFoundException('Candidate about details is not available with the given :: }' + candidateAbout);
        }
        Object.assign(candidateAbout, upldateCandidateAbout);
        await candidateAbout.save();
        return candidateAbout;
    }
    async creteCandidateProject(candidateProjectDTO, projectId) {
        const uploadCandidateProject = new this.uploadCandidateProjectModel(candidateProjectDTO);
        uploadCandidateProject.projectId = projectId;
        const saveUploadCandidateProject = await uploadCandidateProject.save();
        return saveUploadCandidateProject;
    }
    async getCandidateProject(projectId) {
        return await this.uploadCandidateProjectModel.findOne({ projectId }).exec();
    }
    async getprojectByCandidateId(candidateId) {
        return await this.uploadCandidateProjectModel.find({ candidateId }).exec();
    }
    async updateCandidateProject(projectId, upldateCandidateProject) {
        const candidateProject = await this.uploadCandidateProjectModel.findOne({ projectId }).exec();
        if (!candidateProject) {
            throw new common_1.NotFoundException('Candidate project details is not available with the given :: }' + projectId);
        }
        Object.assign(candidateProject, upldateCandidateProject);
        await candidateProject.save();
        return candidateProject;
    }
    async deleteCandidateProject(projectId) {
        const deletedCandidateProject = await this.uploadCandidateProjectModel.findOneAndDelete({ projectId }).exec();
        if (!deletedCandidateProject) {
            throw new common_1.NotFoundException('');
        }
        return deletedCandidateProject;
    }
    async createCandidateEducation(candidateEducationtDTO, educationId) {
        const uploadCandidateEducation = new this.uploadCandidateEducationModel(candidateEducationtDTO);
        uploadCandidateEducation.educationId = educationId;
        const saveUploadCandidateEducation = await uploadCandidateEducation.save();
        return saveUploadCandidateEducation;
    }
    async getCandidateEducation(educationId) {
        return await this.uploadCandidateEducationModel.findOne({ educationId }).exec();
    }
    async getEducationtByCandidateId(candidateId) {
        return await this.uploadCandidateEducationModel.find({ candidateId }).exec();
    }
    async updateCandidateEducation(educationId, upldateCandidateEducation) {
        const candidateEducation = await this.uploadCandidateEducationModel.findOne({ educationId }).exec();
        if (!candidateEducation) {
            throw new common_1.NotFoundException('Candidate education details is not available with the given :: }' + educationId);
        }
        Object.assign(candidateEducation, upldateCandidateEducation);
        await candidateEducation.save();
        return candidateEducation;
    }
    async deleteCandidateEducation(educationId) {
        const deletedCandidateEducation = await this.uploadCandidateEducationModel.findOneAndDelete({ educationId }).exec();
        if (!deletedCandidateEducation) {
            throw new common_1.NotFoundException('');
        }
        return deletedCandidateEducation;
    }
    async createdCandidateEmployment(candidateEmploymentDTO, employmentId) {
        const uploadCandidateEmployment = new this.uploadCandidateEmploymentnModel(candidateEmploymentDTO);
        uploadCandidateEmployment.employmentId = employmentId;
        const saveUploadCandidateEmployment = await uploadCandidateEmployment.save();
        return saveUploadCandidateEmployment;
    }
    async getCandidateEmployment(employmentId) {
        return await this.uploadCandidateEmploymentnModel.findOne({ employmentId }).exec();
    }
    async getEmploymentByCandidateId(candidateId) {
        return await this.uploadCandidateEmploymentnModel.find({ candidateId }).exec();
    }
    async updateCandidateEmployment(employmentId, upldateCandidateEmployment) {
        const candidateEmployment = await this.uploadCandidateEmploymentnModel.findOne({ employmentId }).exec();
        if (!candidateEmployment) {
            throw new common_1.NotFoundException('Candidate education details is not available with the given :: }' + employmentId);
        }
        Object.assign(candidateEmployment, upldateCandidateEmployment);
        await candidateEmployment.save();
        return candidateEmployment;
    }
    async deleteCandidateEmployment(employmentId) {
        const deletedCandidateEmployment = await this.uploadCandidateEmploymentnModel.findOneAndDelete({ employmentId }).exec();
        if (!deletedCandidateEmployment) {
            throw new common_1.NotFoundException('');
        }
        return deletedCandidateEmployment;
    }
    async getAllCandidateAbout() {
        const uploadCandidateAbout = await this.uploadCandidateAboutModel.find().exec();
        return uploadCandidateAbout;
    }
    async getAllCandidateEducation() {
        const uploadCandidateEducation = await this.uploadCandidateEducationModel.find().exec();
        return uploadCandidateEducation;
    }
    async getAllCandidateEmployment() {
        const uploadCandidateEmployment = await this.uploadCandidateEmploymentnModel.find().exec();
        return uploadCandidateEmployment;
    }
    async getAllCandidateProject() {
        const uploadCandidateProject = await this.uploadCandidateProjectModel.find().exec();
        return uploadCandidateProject;
    }
};
exports.UploadCandidateService = UploadCandidateService;
exports.UploadCandidateService = UploadCandidateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(upload_about_schema_1.UploadCandidateAbout.name)),
    __param(1, (0, mongoose_1.InjectModel)(upload_proejct_schema_1.UploadCandidateProject.name)),
    __param(2, (0, mongoose_1.InjectModel)(upload_education_schema_1.UploadCandidateEducation.name)),
    __param(3, (0, mongoose_1.InjectModel)(upload_employment_schema_1.UploadCandidateEmployment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UploadCandidateService);
//# sourceMappingURL=upload.candidate.service.js.map