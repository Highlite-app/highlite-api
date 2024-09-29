import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNotEmpty, IsString, ValidateIf } from "class-validator";
import { PorjectStatus } from "src/enums/project.status.enum";
import mongoose, { Document } from "mongoose";
import { ProjectStatus } from "aws-sdk/clients/rekognition";

@Schema({ collection: "candidate_project" })

export class UploadCandidateProject extends Document {


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectId: string;

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
    projectTitle: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectClient: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectStatus: ProjectStatus;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectStart: string;


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectFinish: PorjectStatus;
   
 

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectDetails: string;


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectSkills?: string[];

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    projectTools?: string[];



}


export const UploadCandidateProjectSchema = SchemaFactory.createForClass(UploadCandidateProject)