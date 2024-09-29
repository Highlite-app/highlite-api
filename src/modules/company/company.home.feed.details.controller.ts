import { Body , Post ,  Put,  NotAcceptableException, Get, Param, NotFoundException, Controller } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyHomeFeedDetails } from "./models/company.home.feed.details";
import { v4 as uuid4} from 'uuid' ; 
import { ApiTags } from "@nestjs/swagger";
import { CompanyHomeFeedDetailsDTO } from "src/dtos/home_feed/company/company.home.feed.details.dto";

@Controller("Company")
@ApiTags('Company Home Feed Details')
export class CompanyHomeFeedDetailsController {


    constructor(private readonly companyService: CompanyService){}


     @Post('createCompanyHomeFeedDetails')
     async createCompanyHomeFeedDetails(@Body() companyHomeFeedDetails : CompanyHomeFeedDetailsDTO ){
           const companHomeFeedDetailsId = uuid4() ; 
           const companyFeedDetails = await this.companyService.createCompanyHomeFeedDetails(companyHomeFeedDetails , companHomeFeedDetailsId) ; 
           try {
            return {
                companHomeFeedDetailsId: companHomeFeedDetailsId
            }
        } catch (error) {

            throw new NotAcceptableException(error);
        }
     }

     @Get('getCompanyHomeFeedDetails/:companyHomeFeedDetailsId')
     async getCompanyHomeFeedDetails(@Param('companyHomeFeedDetailsId')  companHomeFeedDetailsId : string){
        console.log("The companHomeFeedDetailsId for CompanyHomeFeedDetails is :: " + companHomeFeedDetailsId);
        const  companyHomeFeedDetails = await this.companyService.getCompanyHomeFeedDetails(companHomeFeedDetailsId) ; 

        if(companyHomeFeedDetails){
            throw new NotFoundException('companyHomeFeedDetails not found')
        }

        return companyHomeFeedDetails ; 

     }


     @Put('updateCompanyJobPost/:id')
     async updateHomeFeedDFetails(@Param('jobVideoFeedId') jobVideoFeedId: string, @Body() updateHomeFeedDetails: Partial<CompanyHomeFeedDetails>) {
         try {
            const companHomeFeedDetailsId = uuid4() ; 
             const updateCompanyDetails = await this.companyService.updateCompanyHomeFeedDetails(companHomeFeedDetailsId, updateHomeFeedDetails);
             return {
                 message: "Company Job Post Details  Updated Successfully",
                 company: updateCompanyDetails
             };
         } catch (error) {
             if (error instanceof NotFoundException) {
                 throw new NotFoundException('Company not found');
             }
             throw error;
         }
     }

}