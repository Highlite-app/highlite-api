import { Prop, Schema , SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({collection: "company_job_post_video_feed"})
export class CompanyJobPostVideoFeed extends Document{

    @Prop()
    jobVideoFeedId:string ; 
    
    @Prop()
    playbackId : string ; 

    @Prop()
    thumbnailHeight : string ; 

    @Prop()
    thumbnailWidth : string ;

    @Prop()
    assetId : string ; 

    @Prop()
    uploadId : string ; 

    @Prop()
    jobStatus : string ; 

    @Prop()
    companyId : string ; 



}

export const CompanyJobPostVideFeedSchema = SchemaFactory.createForClass(CompanyJobPostVideoFeed);