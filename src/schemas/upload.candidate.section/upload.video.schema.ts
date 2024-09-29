import mongoose, { Document } from "mongoose";
import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";


@Schema({collection: "candidate_video_feed"})
export class UploadCandidateVideo extends Document {


    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    candidateVideoFeedId: string;



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
    description: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    thumbnailUrl: string;




    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    thumbnailWidth?: string;



    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    thumbnailHeight?: string;




    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    playbackId?: string;



    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    assetId?: string;



    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    uploadId: string;



    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    tag?: [string];



    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    })
    category?: [string];
}


export const  UploadCandidateVideoSchema = SchemaFactory.createForClass(UploadCandidateVideo) ; 