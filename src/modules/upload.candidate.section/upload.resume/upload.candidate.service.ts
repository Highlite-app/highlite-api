import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { String } from "aws-sdk/clients/bedrockagent";
import { Model } from "mongoose";
import { CandidateProjectDTO } from "src/dtos/upload.candate.section/upload.project/upload.project.dto";
import { UploadAboutDTO } from "src/dtos/upload.candate.section/upload.resume/upload.about.dto";
import { CandidateEducationDTO } from "src/dtos/upload.candate.section/upload.resume/upload.education.dto";
import { CandidateEmploymentDTO } from "src/dtos/upload.candate.section/upload.resume/upload.employment.dto";
import { UploadCandidateAbout } from "src/schemas/upload.candidate.section/upload.about.schema";
import { UploadCandidateEducation } from "src/schemas/upload.candidate.section/upload.education.schema";
import { UploadCandidateEmployment } from "src/schemas/upload.candidate.section/upload.employment.schema";
import { UploadCandidateProject } from "src/schemas/upload.candidate.section/upload.proejct.schema";


@Injectable()
export class UploadCandidateService{

    constructor(
     @InjectModel(UploadCandidateAbout.name)private readonly uploadCandidateAboutModel: Model<UploadCandidateAbout> , 
     @InjectModel(UploadCandidateProject.name )private readonly uploadCandidateProjectModel: Model<UploadCandidateProject> , 
     @InjectModel(UploadCandidateEducation.name )private readonly uploadCandidateEducationModel: Model<UploadCandidateEducation>,
     @InjectModel(UploadCandidateEmployment.name )private readonly uploadCandidateEmploymentnModel: Model<UploadCandidateEmployment>
     
    )
   {}

     async  createCandidateAbout(uploadAboutDto: UploadAboutDTO , aboutId: String ) : Promise<UploadCandidateAbout| any>{


     const existingUser = await  this.uploadCandidateAboutModel.findOne({candidateId : uploadAboutDto.candidateId}).exec() ; 

     // If the we want to restrict user to upload about multiple need to use this code  // 
      // if(existingUser){
      //    throw new ConflictException('Resume with same candidateId already exists') ;
      // }

        const uploadCandidateResume  = new this.uploadCandidateAboutModel(uploadAboutDto);
        uploadCandidateResume.aboutId = aboutId ; 

        const saveUploadCandidateResume = await uploadCandidateResume.save() ;

        return saveUploadCandidateResume ; 
     }

     async getCandidateAbout( aboutId :String) : Promise<UploadCandidateAbout | null>{
        
      return  await this.uploadCandidateAboutModel.findOne({aboutId}).exec() ; 

     } 

     async getCandidateAboutByCandidateId( candidateId :String) : Promise<UploadCandidateAbout | null>{
        
      return  await this.uploadCandidateAboutModel.findOne({candidateId}).exec() ; 

     } 

     async updateCandidateAbout(aboutId : String  ,  upldateCandidateAbout : Promise<UploadCandidateAbout> | Partial<UploadCandidateAbout | null>) {
        
      const candidateAbout = await this.uploadCandidateAboutModel.findOne({aboutId}).exec() ;

         if(!candidateAbout){

            throw new NotFoundException('Candidate about details is not available with the given :: }' + candidateAbout) ; 
         }

         Object.assign(candidateAbout ,upldateCandidateAbout ) ; 

         await candidateAbout.save() ; 
         return candidateAbout ; 
   
     }
 
     async  creteCandidateProject(candidateProjectDTO: CandidateProjectDTO , projectId: string ) : Promise<UploadCandidateProject| any>{


      // const existingUser = await  this.uploadCandidateProjectModel.findOne({candidateId : candidateProjectDTO.candidateId}).exec() ; 

      // if(existingUser){
      //    throw new ConflictException('Project with same candidateId already exists') ;
      // }

        const uploadCandidateProject  = new this.uploadCandidateProjectModel(candidateProjectDTO);
        uploadCandidateProject.projectId = projectId

        const saveUploadCandidateProject= await uploadCandidateProject.save() ;

        return saveUploadCandidateProject ; 
     }


     async getCandidateProject( projectId :String) : Promise<UploadCandidateProject | null>{
        
      return  await this.uploadCandidateProjectModel.findOne({projectId}).exec() ; 

     } 


     async getprojectByCandidateId( candidateId :String) : Promise<UploadCandidateProject[]>{
        
      return  await this.uploadCandidateProjectModel.find({candidateId}).exec() ; 

     } 

     async updateCandidateProject(projectId : String  ,  upldateCandidateProject : Promise<UploadCandidateProject> | Partial<UploadCandidateProject | null>) {
        
      const candidateProject = await this.uploadCandidateProjectModel.findOne({projectId}).exec() ;

         if(!candidateProject){

            throw new NotFoundException('Candidate project details is not available with the given :: }' +projectId ) ; 
         }

         Object.assign(candidateProject ,upldateCandidateProject ) ; 

         await candidateProject.save() ; 
         return candidateProject ; 
   
     }

     async deleteCandidateProject(projectId: String) : Promise<UploadCandidateProject | null>{
         
         const deletedCandidateProject = await this.uploadCandidateProjectModel.findOneAndDelete({projectId}).exec() ; 

         if(!deletedCandidateProject){
            throw new NotFoundException('')
         }

         return  deletedCandidateProject ; 
     } 


     async  createCandidateEducation(candidateEducationtDTO: CandidateEducationDTO , educationId: string) : Promise<UploadCandidateEducation| any>{


      // const existingUser = await  this.uploadCandidateEducationModel.findOne({candidateId : candidateEducationtDTO.candidateId}).exec() ; 
   
      //  if(existingUser){
      //     throw new ConflictException('Education Details with same candidateId already exists') ;
      //  }
   
         const uploadCandidateEducation = new this.uploadCandidateEducationModel(candidateEducationtDTO);
         uploadCandidateEducation.educationId = educationId ; 
   
         const saveUploadCandidateEducation = await uploadCandidateEducation.save() ;
   
         return saveUploadCandidateEducation ; 
      }
      
     async getCandidateEducation( educationId :String) : Promise<UploadCandidateEducation | null>{
        
      return  await this.uploadCandidateEducationModel.findOne({educationId}).exec() ; 

     } 


     async getEducationtByCandidateId( candidateId :String) : Promise<UploadCandidateEducation[]>{
        
      return  await this.uploadCandidateEducationModel.find({candidateId}).exec() ; 

     } 


     async updateCandidateEducation(educationId : String  ,  upldateCandidateEducation : Promise<UploadCandidateEducation> | Partial<UploadCandidateEducation | null>) {
        
      const candidateEducation = await this.uploadCandidateEducationModel.findOne({educationId}).exec() ;

         if(!candidateEducation){

            throw new NotFoundException('Candidate education details is not available with the given :: }' +educationId ) ; 
         }

         Object.assign(candidateEducation ,upldateCandidateEducation ) ; 

         await candidateEducation.save() ; 
         return candidateEducation ; 
   
     }


     async deleteCandidateEducation(educationId: String) : Promise<UploadCandidateEducation | null>{
         
      const deletedCandidateEducation = await this.uploadCandidateEducationModel.findOneAndDelete({educationId}).exec() ; 

      if(!deletedCandidateEducation){
         throw new NotFoundException('')
      }

      return  deletedCandidateEducation ; 
  } 


      async  createdCandidateEmployment(candidateEmploymentDTO: CandidateEmploymentDTO , employmentId: string ) : Promise<UploadCandidateEmployment| any>{


         // const existingUser = await  this.uploadCandidateEmploymentnModel.findOne({candidateId : candidateEmploymentDTO.candidateId}).exec() ; 
      
         //  if(existingUser){
         //     throw new ConflictException('Education Details with same candidateId already exists') ;
         //  }
      
            const uploadCandidateEmployment = new this.uploadCandidateEmploymentnModel(candidateEmploymentDTO);
            uploadCandidateEmployment.employmentId = employmentId ;
      
            const saveUploadCandidateEmployment = await uploadCandidateEmployment.save() ;
      
            return saveUploadCandidateEmployment ; 
         }

         async getCandidateEmployment( employmentId :String) : Promise<UploadCandidateEmployment | null>{
        
            return  await this.uploadCandidateEmploymentnModel.findOne({employmentId}).exec() ; 
      
           } 

           async getEmploymentByCandidateId( candidateId :String) : Promise<UploadCandidateEmployment[]>{
        
            return  await this.uploadCandidateEmploymentnModel.find({candidateId}).exec() ; 
      
           } 


           async updateCandidateEmployment(employmentId : String  ,  upldateCandidateEmployment: Promise<UploadCandidateEmployment> | Partial<UploadCandidateEmployment | null>) {
        
            const candidateEmployment = await this.uploadCandidateEmploymentnModel.findOne({employmentId}).exec() ;
      
               if(!candidateEmployment){
      
                  throw new NotFoundException('Candidate education details is not available with the given :: }' +employmentId ) ; 
               }
      
               Object.assign(candidateEmployment ,upldateCandidateEmployment ) ; 
      
               await candidateEmployment.save() ; 
               return candidateEmployment ; 
         
           }


     async deleteCandidateEmployment(employmentId: String) : Promise<UploadCandidateEmployment | null>{
         
      const deletedCandidateEmployment = await this.uploadCandidateEmploymentnModel.findOneAndDelete({employmentId}).exec() ; 

      if(!deletedCandidateEmployment){
         throw new NotFoundException('')
      }

      return  deletedCandidateEmployment ; 
  } 

  async  getAllCandidateAbout(): Promise<UploadCandidateAbout[]>{

   const uploadCandidateAbout  = await this.uploadCandidateAboutModel.find().exec() ; 

   return uploadCandidateAbout ; 
  }

  async getAllCandidateEducation() : Promise<UploadCandidateEducation[]>{
   const uploadCandidateEducation  = await this.uploadCandidateEducationModel.find().exec() ; 
   return uploadCandidateEducation ; 
  }

  async getAllCandidateEmployment(): Promise<UploadCandidateEmployment[]>{
   const uploadCandidateEmployment = await this.uploadCandidateEmploymentnModel.find().exec() ; 
   return uploadCandidateEmployment ; 
  }


  async getAllCandidateProject(): Promise<UploadCandidateProject[]>{
   const uploadCandidateProject = await this.uploadCandidateProjectModel.find().exec() ; 
   return uploadCandidateProject ; 
  }


}


