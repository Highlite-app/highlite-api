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
exports.UploadResumeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const upload_candidate_service_1 = require("./upload.candidate.service");
const uuid_1 = require("uuid");
const upload_about_dto_1 = require("../../../dtos/upload.candate.section/upload.resume/upload.about.dto");
const upload_project_dto_1 = require("../../../dtos/upload.candate.section/upload.project/upload.project.dto");
const upload_education_dto_1 = require("../../../dtos/upload.candate.section/upload.resume/upload.education.dto");
const upload_employment_dto_1 = require("../../../dtos/upload.candate.section/upload.resume/upload.employment.dto");
const conflictResponse = {
    status: 409,
    description: 'Resume with the same candidateId already exists.',
    links: {
        findCandidate: {
            description: 'Find existing candidate by candidateId',
            operationId: 'findCandidateById',
            parameters: {
                candidateId: { description: 'ID of the candidate', example: 'c96acdb2-a76e-4b0f-8dfb-cdfac2f3dde8' },
            },
        },
    },
};
let UploadResumeController = class UploadResumeController {
    constructor(uploadCandidateService) {
        this.uploadCandidateService = uploadCandidateService;
    }
    async createCandidateAbout(uploadAboutDTO) {
        try {
            const aboutId = (0, uuid_1.v4)();
            const uploadResume = await this.uploadCandidateService.createCandidateAbout(uploadAboutDTO, aboutId);
            return {
                status: common_1.HttpStatus.OK,
                aboutId: aboutId,
                candidateId: uploadAboutDTO.candidateId,
                message: 'Candidate Resume Uploaded Successfully',
            };
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCandidateAbout(aboutId) {
        try {
            const getAboutDetails = await this.uploadCandidateService.getCandidateAbout(aboutId);
            return getAboutDetails;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to get About details', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCandidateAboutByCandidateId(candidateId) {
        try {
            const getAboutDetails = await this.uploadCandidateService.getCandidateAbout(candidateId);
            return getAboutDetails;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to get About details', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createCandidateProject(candidateProjectDTO) {
        try {
            const projectId = (0, uuid_1.v4)();
            const uploadProject = await this.uploadCandidateService.creteCandidateProject(candidateProjectDTO, projectId);
            return {
                status: common_1.HttpStatus.OK,
                projectId: projectId,
                candidateId: candidateProjectDTO.candidateId,
                message: 'Candidate Project Uploaded Successfully',
            };
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadCandidateProject(projectId) {
        try {
            const uploadProject = await this.uploadCandidateService.getCandidateProject(projectId);
            return uploadProject;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadCandidateProjectByCandidateId(candidateId) {
        try {
            const uploadProject = await this.uploadCandidateService.getprojectByCandidateId(candidateId);
            return uploadProject;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCandidateProject(projectId, candidateProject) {
        try {
            const uploadProject = await this.uploadCandidateService.updateCandidateProject(projectId, candidateProject);
            return uploadProject;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCandidateProject(projectId) {
        try {
            const uploadProject = await this.uploadCandidateService.deleteCandidateProject(projectId);
            return uploadProject;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createCandidateEducation(candidateEducationDTO) {
        try {
            const educationId = (0, uuid_1.v4)();
            const uploadProject = await this.uploadCandidateService.createCandidateEducation(candidateEducationDTO, educationId);
            return {
                status: common_1.HttpStatus.OK,
                educationId: educationId,
                candidateId: candidateEducationDTO.candidateId,
                message: 'Candidate Education Uploaded Successfully',
            };
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload education due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCandidateEducation(educationId) {
        try {
            const uploadEducation = await this.uploadCandidateService.getCandidateEducation(educationId);
            return uploadEducation;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload education due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadCandidateEducationByCandidateId(candidateId) {
        try {
            const uploadProject = await this.uploadCandidateService.getEducationtByCandidateId(candidateId);
            return uploadProject;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCandidateEducation(educationId, candidateEducation) {
        try {
            const updateEducation = await this.uploadCandidateService.updateCandidateEducation(educationId, candidateEducation);
            return updateEducation;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCandidateEducation(educationId) {
        try {
            const deleteEducation = await this.uploadCandidateService.deleteCandidateEducation(educationId);
            return deleteEducation;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadCandidateEmployment(candidateEmploymentnDTO) {
        try {
            const employmentId = (0, uuid_1.v4)();
            const uploadProject = await this.uploadCandidateService.createdCandidateEmployment(candidateEmploymentnDTO, employmentId);
            return {
                status: common_1.HttpStatus.OK,
                employmentId: employmentId,
                candidateId: candidateEmploymentnDTO.candidateId,
                message: 'Candidate Employment Uploaded Successfully',
            };
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload employment due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCandidateEmployment(employmentId) {
        try {
            const getEmployment = await this.uploadCandidateService.getCandidateEmployment(employmentId);
            return getEmployment;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload education due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadCandidateEmploymentyCandidateId(candidateId) {
        try {
            const getEmploymentByCandidateId = await this.uploadCandidateService.getEmploymentByCandidateId(candidateId);
            return getEmploymentByCandidateId;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCandidateEmployment(employmentId, candiateEmployment) {
        try {
            const updateEducation = await this.uploadCandidateService.updateCandidateEmployment(employmentId, candiateEmployment);
            return updateEducation;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCandidateEmployment(employmentId) {
        try {
            const deleteEmployment = await this.uploadCandidateService.deleteCandidateEmployment(employmentId);
            return deleteEmployment;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Failed to upload resume due to an internal server error.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UploadResumeController = UploadResumeController;
__decorate([
    (0, common_1.Post)('createAbout'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Video' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Resume Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Resume with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_about_dto_1.UploadAboutDTO]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "createCandidateAbout", null);
__decorate([
    (0, common_1.Get)('getAbout/:aboutId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Video' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Resume Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Resume with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('aboutId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "getCandidateAbout", null);
__decorate([
    (0, common_1.Get)('getAboutByCandidateId/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Video' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Resume Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Resume with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "getCandidateAboutByCandidateId", null);
__decorate([
    (0, common_1.Post)('createProject'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_project_dto_1.CandidateProjectDTO]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "createCandidateProject", null);
__decorate([
    (0, common_1.Get)('getProject/:projectId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "uploadCandidateProject", null);
__decorate([
    (0, common_1.Get)('getProjectByCandidateId/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "uploadCandidateProjectByCandidateId", null);
__decorate([
    (0, common_1.Put)('updateProject/:projectId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "updateCandidateProject", null);
__decorate([
    (0, common_1.Delete)('deleteProject/:projectId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "deleteCandidateProject", null);
__decorate([
    (0, common_1.Post)('createEducation'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Education' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Education Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Education Details with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_education_dto_1.CandidateEducationDTO]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "createCandidateEducation", null);
__decorate([
    (0, common_1.Get)('getEducation/:educationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Education' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Education Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Education Details with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('educationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "getCandidateEducation", null);
__decorate([
    (0, common_1.Get)('getEducationByCandidateId/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "uploadCandidateEducationByCandidateId", null);
__decorate([
    (0, common_1.Put)('updateEducation/:educationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('educationId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "updateCandidateEducation", null);
__decorate([
    (0, common_1.Delete)('deleteEducation/:educationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('educationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "deleteCandidateEducation", null);
__decorate([
    (0, common_1.Post)('createEmployment'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Employment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Education Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Employment Details with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_employment_dto_1.CandidateEmploymentDTO]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "uploadCandidateEmployment", null);
__decorate([
    (0, common_1.Get)('getEmployment/:employmentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Education' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Education Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Education Details with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('employmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "getCandidateEmployment", null);
__decorate([
    (0, common_1.Get)('getEducationByCandidateId/:candidateId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('candidateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "uploadCandidateEmploymentyCandidateId", null);
__decorate([
    (0, common_1.Put)('updateEmployment/:employmentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('employmentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "updateCandidateEmployment", null);
__decorate([
    (0, common_1.Delete)('deleteEmployment/:employmentId '),
    (0, swagger_1.ApiOperation)({ summary: 'Upload Candidate Project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Candidate Project Uploaded Successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    (0, swagger_1.ApiResponse)(conflictResponse),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Project with the same candidateId already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('employmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadResumeController.prototype, "deleteCandidateEmployment", null);
exports.UploadResumeController = UploadResumeController = __decorate([
    (0, common_1.Controller)('Candidate'),
    (0, swagger_1.ApiTags)('Upload-Candidate-Resume'),
    __metadata("design:paramtypes", [upload_candidate_service_1.UploadCandidateService])
], UploadResumeController);
//# sourceMappingURL=upload.resume.controller.js.map