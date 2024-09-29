import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { FileManagementService } from './file-management.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerS3Config } from '../../configs/multer-s3.config';

// Guards
import { JwtAuthGuard } from '../../security/guards/jwt.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('file-management')
export class FileManagementController {
  constructor(private readonly fileManagementService: FileManagementService) {}
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', multerS3Config))
  @ApiTags('File Management')
  upload(@UploadedFile() file: Express.MulterS3.File): string {
    try {
      if (!file) {
        throw new BadRequestException('No file provided');
      }

      return JSON.stringify({
        data: [{ key: file.key }],
        statusCode: 200,
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new BadRequestException('Failed to process the file');
      }
    }
  }
}
