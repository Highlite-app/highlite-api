import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { WorkTypeEnum } from "src/enums/work.type.enum";

@Schema({collection: 'company_job_post'})
export class CompanyJobPostDetails extends Document {
 
  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  jobPostId?: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  companyId: string;


  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
jobVideoFeedId: string;


  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  jobDescription: string;


  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  location: string  ; 

  
  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  position: string  ; 

  
  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  skills: string[];

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  tools: string[];

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  workType: WorkTypeEnum;
  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  jobDuration: string;

 

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
})
  salary: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    required: false,
    default: new mongoose.Types.ObjectId
})
  status: string;
}

export const CompanyJobPostDetailsSchema = SchemaFactory.createForClass(CompanyJobPostDetails);
