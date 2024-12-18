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
import { Model } from 'mongoose';
import { BookmarkCollection } from "src/dtos/bookmark/bookmark.collection";
import { BookmarkCollectionDTO } from "src/dtos/bookmark/bookmark.collection.dto";
import { CandidateService } from "../candidate/candidate.service";
import { UploadCandidateService } from "../upload.candidate.section/upload.resume/upload.candidate.service";
import { UploadVideService } from "../upload.candidate.section/upload.video/upload.video.service";
import { BookmarkCollectionItemResponse } from "src/dtos/bookmark/bookmark.collection.item.resonse";
import { CompanyService } from "../company/company.service";
import { BookmarkInfoDTO } from "src/dtos/bookmark/bookmark.info.dto";
export declare class BookmarkService {
    private readonly bookmarkModel;
    private readonly candidateService;
    private readonly uploadCandidateServie;
    private readonly uploadVideoService;
    private readonly companyService;
    constructor(bookmarkModel: Model<any>, candidateService: CandidateService, uploadCandidateServie: UploadCandidateService, uploadVideoService: UploadVideService, companyService: CompanyService);
    bookmark(bookmarkCollectionDto: BookmarkCollectionDTO, bookmarkId: string): Promise<any>;
    addBookmarkInfo(bookmarkInfoDto: BookmarkInfoDTO): Promise<any>;
    editbookmarkCollectionName(title: string, bookmarkId: string): Promise<void>;
    deleteBookmarkCollection(bookmarkId: string): Promise<any>;
    getAllBookmarkDetail(): Promise<BookmarkCollection[]>;
    getBookmarkDetailByUserId(userId: string): Promise<BookmarkCollectionDTO[]>;
    getBookmarkDetails(userId: string, nextToken?: string | null | undefined): Promise<BookmarkCollectionItemResponse>;
}
