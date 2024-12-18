import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {isValidObjectId, Model , Types } from 'mongoose' ; 
import { BookmarkCollection } from "src/dtos/bookmark/bookmark.collection";
import { BookmarkCollectionDTO } from "src/dtos/bookmark/bookmark.collection.dto";
import { Bookmark } from "src/schemas/bookmark/bookmark.schema";
import { CandidateService } from "../candidate/candidate.service";
import { UploadCandidateService } from "../upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "../upload.candidate.section/upload.video/upload.video.service";
import { UserTypeEnum } from "src/enums/user.type.enum";
import { BookmarkCollectionItemResponse } from "src/dtos/bookmark/bookmark.collection.item.resonse";
import { BookmarkInfo } from "src/schemas/bookmark/bookmark.info.schema";
import { CandidateOnBoardingDto } from "src/dtos/candidate/candidate.onboarding.dto";
import { UploadVideoDTO } from "src/dtos/upload.candate.section/upload.video/upload.video.dto";
import { UploadCandidateAbout } from "src/schemas/upload.candidate.section/upload.about.schema";
import { UploadAboutDTO } from "src/dtos/upload.candate.section/upload.resume/upload.about.dto";
import { CandidateEducationDTO } from "src/dtos/upload.candate.section/upload.resume/upload.education.dto";
import { CandidateEmploymentDTO } from "src/dtos/upload.candate.section/upload.resume/upload.employment.dto";
import { CompanyService } from "../company/company.service";
import { CompanyOnBoardingDTO } from "src/dtos/company/company.details.dto";
import { CompanyJobPostDTO } from "src/dtos/company/company.job.post.dto";
import { CompanyHomeFeedDetailsDTO } from "src/dtos/home_feed/company/company.home.feed.details.dto";
import { CompanyJobPostVideoFeedDTO } from "src/dtos/company/company.job.post.video.feed.dto";
import { BookmarkInfoDTO } from "src/dtos/bookmark/bookmark.info.dto";
import { v4 as uuid4} from 'uuid' ; 
import { NotFoundError } from "rxjs";


@Injectable()
export class BookmarkService{

constructor( @InjectModel(Bookmark.name) private readonly bookmarkModel:Model<any> , 

private readonly candidateService : CandidateService, 
private readonly uploadCandidateServie : UploadCandidateService , 
private readonly uploadVideoService : UploadVideService ,  
private readonly companyService : CompanyService , 
){}

    async bookmark(bookmarkCollectionDto: BookmarkCollectionDTO , bookmarkId : string) : Promise<any>{
        const bookmarkDetails  = new this.bookmarkModel(bookmarkCollectionDto) ; 
        bookmarkDetails.bookmarkId = bookmarkId ; 
        // Ensure bookmarkInfo is an array and then update it
    if (Array.isArray(bookmarkDetails.bookmarkInfo)) {
        bookmarkDetails.bookmarkInfo.forEach((info: BookmarkInfoDTO) => {
            info.bookmarkCollectionId = bookmarkId;
        });
    }

    if (Array.isArray(bookmarkDetails.bookmarkInfo)) {
        bookmarkDetails.bookmarkInfo.forEach((info: BookmarkInfoDTO) => {
            info.bookmarkInfoId = uuid4() ; 
        });
    }


        const saveBookmarkDetails = await bookmarkDetails.save() ; 
        return saveBookmarkDetails ; 
    }

    async addBookmarkInfo(bookmarkInfoDto : BookmarkInfoDTO): Promise<any>{

        const {bookmarkCollectionId , type , referenceId , candidateId , companyId } = bookmarkInfoDto ; 

          const bookmarkId = bookmarkCollectionId ; 
         
         const bookmarkCollection = await this.bookmarkModel.findOne({bookmarkId}) ; 

         if(!bookmarkCollection){

            throw  new NotFoundException("No Collection found with the given bookmarkcollectionId "+": "+ bookmarkCollectionId) ;
         }

         const newBookmarkInfo = {
            bookmarkInfoId : uuid4() , 
            type , 
            bookmarkCollectionId , 
            referenceId , 
            candidateId , 
            companyId , 

         } ; 

         bookmarkCollection.bookmarkInfo.push(newBookmarkInfo) ; 

         await bookmarkCollection.save() ;
         
         return newBookmarkInfo ;  
         
        }

        async editbookmarkCollectionName(title:string , bookmarkId: string){
             
            const collection = await this.bookmarkModel.findOne({bookmarkId}).exec() ; 

            if(!collection){
                throw new NotFoundException(`Collection with bookmarkId:${bookmarkId} not found`) ; 
            }
            
            const bookmarkCollection = await this.bookmarkModel.find       
        }

        async deleteBookmarkCollection(bookmarkId: string): Promise<any>{

            const collection = await this.bookmarkModel.findOne({bookmarkId}).exec() ; 

            if(!collection){
                throw new NotFoundException(`Collection with bookmarkId:${bookmarkId} not found`) ; 
            }

            const bookmarkCollection = await this.bookmarkModel.findOneAndDelete({bookmarkId}).exec() ; 

            return bookmarkCollection ; 
        }

    async getAllBookmarkDetail() : Promise<BookmarkCollection[]>{
        const allBookmarkDetails = await this.bookmarkModel.find() ; 
        return allBookmarkDetails ; 
    }


    async getBookmarkDetailByUserId(userId: string) : Promise<BookmarkCollectionDTO[]>{
        const bookmarkDetails = await this.bookmarkModel.find({userId}) ; 
        return bookmarkDetails ; 
    }

    async getBookmarkDetails( userId: string , nextToken?:string | null | undefined): Promise<BookmarkCollectionItemResponse>{


        const bookmarkDetails  = await this.getBookmarkDetailByUserId(userId) ; 

      
      // candidate
        const candidateOnboarding = await this.candidateService.getAllCandidateDetails();

        const uploadCandidateAbout = await this.uploadCandidateServie.getAllCandidateAbout();

        const uploadCandidateEmployment = await this.uploadCandidateServie.getAllCandidateEmployment();

        const uploadCandidateEducation = await this.uploadCandidateServie.getAllCandidateEducation();

        const uploadCandidateProject = await this.uploadCandidateServie.getAllCandidateProject();

        const uploadCandidateVideoDetails = await this.uploadVideoService.getAllCandidateVideo();

      
        //.........//

         // company
        const companyOnboarding = await  this.companyService.getAllCompanyOnboarding() ; 

        const jobPost =  await this.companyService.getAllCompanyJobPostDetails() ; 

        const companyHomeFeedDetails = await this.companyService.getAllCompanyHomeFeedDetails() ; 


        const companyJobPostVideoFeed  =  await this.companyService.getAllCompanyJobPostVideoFeedDetails() ; 

        //.........//
 
        const bookmarkCollectionItemResponse: BookmarkCollectionItemResponse = {
      
          items: bookmarkDetails.map((bookmarkDetail) => ({
            bookmarkId: bookmarkDetail.bookmarkId , 
            userId: bookmarkDetail.userId , 
            title: bookmarkDetail.title , 
            isDeleted: bookmarkDetail.isDeleted , 
            bookmarkInfo: bookmarkDetail.bookmarkInfo.map((bookmarkInfo) => ({
                bookmarkInfoId: bookmarkInfo.bookmarkInfoId  ?? '', 
                type: bookmarkInfo.type ?? '' , 
                bookmarkCollectionId : bookmarkInfo.bookmarkCollectionId  ?? '', 
                referenceId : bookmarkInfo.referenceId  ?? '', 
                 
                //candidate part

                candidateOnboarding: candidateOnboarding.find((candidate)=> candidate.candidateId == bookmarkInfo.candidateId) as CandidateOnBoardingDto ?? null , 
                candidateVideoFeed : uploadCandidateVideoDetails.find((videoFeed) => videoFeed.candidateId == bookmarkInfo.candidateId) as UploadVideoDTO  ?? null, 
                aboutCandidate: uploadCandidateAbout.find((aboutCandidate) => aboutCandidate.candidateId == bookmarkInfo.candidateId) as UploadCandidateAbout ??null , 
                candidateEducation : uploadCandidateEducation.filter(education => education.candidateId == bookmarkInfo.candidateId) || [], 
                candidateEmployment : uploadCandidateEmployment.filter(employment=> employment.candidateId == bookmarkInfo.candidateId) || []  , 
                candidateProject : uploadCandidateProject.filter(project=> project.candidateId == bookmarkInfo.candidateId) || []  , 
                candidateHomeFeedDetails : null  ,


                //company part
                
                companyOnboarding : companyOnboarding.find((compapany) => compapany.companyId == bookmarkInfo.companyId ) as CompanyOnBoardingDTO ?? null ,
                jobPosting : jobPost.find((jobPost) => jobPost.companyId == bookmarkInfo.companyId) as CompanyJobPostDTO ?? null , 
                companyHomeFeedDetails : companyHomeFeedDetails.find((feedDetails) => feedDetails.companyId == bookmarkInfo.companyId) as CompanyHomeFeedDetailsDTO ?? null , 
                companyJobPostVideoFeed : companyJobPostVideoFeed.find((jonPostVideoFeed) => jonPostVideoFeed.companyId == bookmarkInfo.companyId) as CompanyJobPostVideoFeedDTO ?? null
            }))
          })),
          nextToken: nextToken,

    
        }
     
        return  bookmarkCollectionItemResponse ; 
      
    }

}