import { Body, Controller, Post, ConflictException, HttpException, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags , ApiResponseOptions } from '@nestjs/swagger';
import { UploadCandidateService } from './upload.candidate.service';
import { v4 as uuid4 } from 'uuid';
import { UploadAboutDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.about.dto';
import { CandidateProjectDTO } from 'src/dtos/upload.candate.section/upload.project/upload.project.dto';
import { CandidateEducationDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.education.dto';
import { CandidateEmploymentDTO } from 'src/dtos/upload.candate.section/upload.resume/upload.employment.dto';
import { UploadCandidateProject } from 'src/schemas/upload.candidate.section/upload.proejct.schema';
import { UploadCandidateEducation } from 'src/schemas/upload.candidate.section/upload.education.schema';
import { UploadCandidateEmployment } from 'src/schemas/upload.candidate.section/upload.employment.schema';


const conflictResponse: ApiResponseOptions = {
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

  
@Controller('Candidate')
@ApiTags('Upload-Candidate-Resume')
export class UploadResumeController {
  constructor(private readonly uploadCandidateService: UploadCandidateService) {}

  @Post('createAbout')
  @ApiOperation({ summary: 'Upload Candidate Video' })
  @ApiResponse({ status: 200, description: 'Candidate Resume Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 404, description: 'Bad Request' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Resume with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createCandidateAbout(@Body() uploadAboutDTO: UploadAboutDTO) {
    try {
      const aboutId = uuid4();
      const uploadResume = await this.uploadCandidateService.createCandidateAbout(uploadAboutDTO , aboutId);

      return {
        status: HttpStatus.OK , 
        aboutId: aboutId,
        candidateId: uploadAboutDTO.candidateId,
        message: 'Candidate Resume Uploaded Successfully',
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get('getAbout/:aboutId')
  @ApiOperation({ summary: 'Upload Candidate Video' })
  @ApiResponse({ status: 200, description: 'Candidate Resume Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 404, description: 'Bad Request' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Resume with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getCandidateAbout( @Param('aboutId') aboutId: string) {
    try {
    
      const getAboutDetails = await this.uploadCandidateService.getCandidateAbout(aboutId);

      return getAboutDetails ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to get About details', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get('getAboutByCandidateId/:candidateId')
  @ApiOperation({ summary: 'Upload Candidate Video' })
  @ApiResponse({ status: 200, description: 'Candidate Resume Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 404, description: 'Bad Request' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Resume with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getCandidateAboutByCandidateId( @Param('candidateId') candidateId: string) {
    try {
    
      const getAboutDetails = await this.uploadCandidateService.getCandidateAbout(candidateId);

      return getAboutDetails ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to get About details', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  @Post('createProject')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createCandidateProject(@Body() candidateProjectDTO: CandidateProjectDTO) {
    try {

      const projectId = uuid4();
      const uploadProject = await this.uploadCandidateService.creteCandidateProject(candidateProjectDTO, projectId);

      return {
        status: HttpStatus.OK , 
        projectId: projectId,
        candidateId: candidateProjectDTO.candidateId,
        message: 'Candidate Project Uploaded Successfully',
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get('getProject/:projectId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateProject(@Param('projectId') projectId: string) {
    try {

  
      const uploadProject = await this.uploadCandidateService.getCandidateProject(projectId);

      return uploadProject ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('getProjectByCandidateId/:candidateId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateProjectByCandidateId(@Param('candidateId') candidateId: string) {
    try {

  
      const uploadProject = await this.uploadCandidateService.getprojectByCandidateId(candidateId);

      return uploadProject ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('updateProject/:projectId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateCandidateProject(@Param('projectId') projectId: string , @Body() candidateProject: Partial<UploadCandidateProject> ) {
    try {

  
      const uploadProject = await this.uploadCandidateService.updateCandidateProject( projectId ,candidateProject);

      return uploadProject ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('deleteProject/:projectId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async deleteCandidateProject(@Param('projectId') projectId: string  ) {
    try {

  
      const uploadProject = await this.uploadCandidateService.deleteCandidateProject( projectId );

      return uploadProject ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('createEducation')
  @ApiOperation({ summary: 'Upload Candidate Education' })
  @ApiResponse({ status: 200, description: 'Candidate Education Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Education Details with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createCandidateEducation(@Body() candidateEducationDTO: CandidateEducationDTO) {
    try {

      const educationId = uuid4();
      const uploadProject = await this.uploadCandidateService.createCandidateEducation(candidateEducationDTO , educationId);

      return {
        status: HttpStatus.OK , 
        educationId: educationId,
        candidateId: candidateEducationDTO.candidateId,
        message: 'Candidate Education Uploaded Successfully',
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload education due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get('getEducation/:educationId')
  @ApiOperation({ summary: 'Upload Candidate Education' })
  @ApiResponse({ status: 200, description: 'Candidate Education Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Education Details with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getCandidateEducation(@Param('educationId') educationId : string) {
    try {

  
      const uploadEducation = await this.uploadCandidateService.getCandidateEducation( educationId);

      return uploadEducation ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload education due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('getEducationByCandidateId/:candidateId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateEducationByCandidateId(@Param('candidateId') candidateId: string) {
    try {

  
      const uploadProject = await this.uploadCandidateService.getEducationtByCandidateId(candidateId);

      return uploadProject ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('updateEducation/:educationId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateCandidateEducation(@Param('educationId') educationId: string , @Body() candidateEducation: Partial<UploadCandidateEducation> ) {
    try {

  
      const updateEducation = await this.uploadCandidateService.updateCandidateEducation( educationId ,candidateEducation);

      return updateEducation ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('deleteEducation/:educationId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async deleteCandidateEducation(@Param('educationId') educationId: string  ) {
    try {

  
      const deleteEducation = await this.uploadCandidateService.deleteCandidateEducation( educationId );

      return deleteEducation ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('createEmployment')
  @ApiOperation({ summary: 'Upload Candidate Employment' })
  @ApiResponse({ status: 200, description: 'Candidate Education Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Employment Details with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateEmployment(@Body() candidateEmploymentnDTO: CandidateEmploymentDTO) {
    try {

      const employmentId = uuid4();
      const uploadProject = await this.uploadCandidateService.createdCandidateEmployment(candidateEmploymentnDTO , employmentId);

      return {
        status: HttpStatus.OK , 
        employmentId: employmentId,
        candidateId: candidateEmploymentnDTO.candidateId,
        message: 'Candidate Employment Uploaded Successfully',
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload employment due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('getEmployment/:employmentId')
  @ApiOperation({ summary: 'Upload Candidate Education' })
  @ApiResponse({ status: 200, description: 'Candidate Education Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Education Details with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getCandidateEmployment(@Param('employmentId') employmentId : string) {
    try {

    
      const getEmployment = await this.uploadCandidateService.getCandidateEmployment( employmentId);

      return getEmployment ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload education due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('getEducationByCandidateId/:candidateId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async uploadCandidateEmploymentyCandidateId(@Param('candidateId') candidateId: string) {
    try {

  
      const getEmploymentByCandidateId  = await this.uploadCandidateService.getEmploymentByCandidateId(candidateId);

      return getEmploymentByCandidateId ; 
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('updateEmployment/:employmentId')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateCandidateEmployment(@Param('employmentId') employmentId: string , @Body() candiateEmployment: Partial<UploadCandidateEmployment> ) {
    try {

  
      const updateEducation = await this.uploadCandidateService.updateCandidateEmployment( employmentId ,candiateEmployment);

      return updateEducation ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('deleteEmployment/:employmentId ')
  @ApiOperation({ summary: 'Upload Candidate Project' })
  @ApiResponse({ status: 200, description: 'Candidate Project Uploaded Successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse(conflictResponse)
  @ApiResponse({ status: 409, description: 'Project with the same candidateId already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async deleteCandidateEmployment(@Param('employmentId') employmentId: string  ) {
    try {

  
      const deleteEmployment = await this.uploadCandidateService.deleteCandidateEmployment(employmentId );

      return deleteEmployment ; 

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException('Failed to upload resume due to an internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
   


  }

}

}