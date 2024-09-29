import { WorkTypeEnum } from "src/enums/work.type.enum";
import { JobDurationEnum } from "src/enums/job.duration.enum";
import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";


@Schema({ collection : 'candidate_onboarding'})
export class CandidateDetails extends Document{

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    candidateId:string ;
   
 
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    firstName: string;
  
   
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    lastName: string;
  
   
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    position: string;
  
   
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
    
    jobDuration: JobDurationEnum;
  
     

    
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    salary: string;
   
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
   
    city: string;
  
   
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    country: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    email: string;
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })

    username: string;

    @Prop({
        type: mongoose.Types.ObjectId , 
        required: true , 
        default: new mongoose.Types.ObjectId 
    })

    about : string ; 

    @Prop({
        type: mongoose.Types.ObjectId , 
        required: false , 
        default: new mongoose.Types.ObjectId 
    })

    profilePicture : string ; 

    
   


}

export const CandidateModelSchema = SchemaFactory.createForClass(CandidateDetails);