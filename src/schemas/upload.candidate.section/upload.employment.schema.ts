import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({collection:"candidate_employment"})
export class UploadCandidateEmployment extends Document{


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    employmentId: string;
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    candidateId: string;
    
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    employmentStatus: string;
  

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    employmentType: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    employmentTitle: string;
  

    
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    companyName: string;
  


    
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    startDate: string;
  
 

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    endDate: string;
}

export const UploadCandidateEmploymentSchema = SchemaFactory.createForClass(UploadCandidateEmployment) ; 