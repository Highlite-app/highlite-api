/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Document } from "mongoose";
import { BookmarkInfo } from "./bookmark.info.schema";
export declare class Bookmark extends Document {
    bookmarkId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    title: string;
    isDeleted: boolean;
    bookmarkInfo: BookmarkInfo[];
}
export declare const BookmarkSchema: mongoose.Schema<Bookmark, mongoose.Model<Bookmark, any, any, any, mongoose.Document<unknown, any, Bookmark> & Bookmark & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Bookmark, mongoose.Document<unknown, {}, mongoose.FlatRecord<Bookmark>> & mongoose.FlatRecord<Bookmark> & {
    _id: mongoose.Types.ObjectId;
}>;
