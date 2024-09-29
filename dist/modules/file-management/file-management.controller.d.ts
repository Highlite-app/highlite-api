/// <reference types="multer-s3" />
import { FileManagementService } from './file-management.service';
export declare class FileManagementController {
    private readonly fileManagementService;
    constructor(fileManagementService: FileManagementService);
    upload(file: Express.MulterS3.File): string;
}
