import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({collection: 'candidate_education'})
export class UploadCandidateEducation extends Document{


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    educationId: string;

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
    school: string;
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    degree: string;
  
  
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    specialization: string;
  
    
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


export const UploadCandidateEducationSchema = SchemaFactory.createForClass(UploadCandidateEducation) 