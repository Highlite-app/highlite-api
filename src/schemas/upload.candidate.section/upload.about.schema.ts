import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({ collection: 'candidate_about' })
export class UploadCandidateAbout extends Document {


  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
  })
  aboutId: string


  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
  })
  candidateId: string

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
  })
  aboutCandidate: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId
  })
  languages: string[];



}

export const UploadCandidateAboutschema = SchemaFactory.createForClass(UploadCandidateAbout); 