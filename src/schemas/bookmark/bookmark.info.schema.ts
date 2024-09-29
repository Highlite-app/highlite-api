
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
// BookmarkInfoSchema
@Schema()
export class BookmarkInfo extends Document {
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    bookmarkInfoId: mongoose.Types.ObjectId;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    type: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    bookmarkCollectionId: string;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    referenceId: string;

    @Prop()
    candidateId?: string;

    @Prop()
    companyId?: string;
}

export const BookmarkInfoSchema = SchemaFactory.createForClass(BookmarkInfo);