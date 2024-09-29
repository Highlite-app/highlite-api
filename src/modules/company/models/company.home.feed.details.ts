import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({ collection: 'company_home_feed_details' })
export class CompanyHomeFeedDetails extends Document {


    @Prop({
      type: mongoose.Types.ObjectId,
      required: true,
      default: new mongoose.Types.ObjectId
    })
    companyHomeFeedDetailsId: string
  
  
    @Prop({
      type: mongoose.Types.ObjectId,
      required: true,
      default: new mongoose.Types.ObjectId
    })
    companyId: string
  
    @Prop({
      type: mongoose.Types.ObjectId,
      required: true,
      default: new mongoose.Types.ObjectId
    })
    jobPostId: string;
  
      
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
      like: string;

      @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
      share: string;

      @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
      follows: string;


      @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
      following: string;


      @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
      profileVisit: string;


      @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
      bookmark: string;
  
  }

  export const CompamnyHomeFeedDetailsSchema = SchemaFactory.createForClass(CompanyHomeFeedDetails) ; 