    import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
    import mongoose, { Document } from "mongoose";
import { BookmarkInfo, BookmarkInfoSchema } from "./bookmark.info.schema";


@Schema({ collection: 'bookmark' })
export class Bookmark extends Document {
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    bookmarkId: mongoose.Types.ObjectId;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    userId: mongoose.Types.ObjectId;

    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    title: string;
    
    @Prop({
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
      })
    isDeleted: boolean;

    @Prop({
        type: [BookmarkInfoSchema],
    })
    bookmarkInfo: BookmarkInfo[];
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);


