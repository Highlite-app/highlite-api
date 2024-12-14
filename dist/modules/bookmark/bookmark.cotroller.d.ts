import { BookmarkCollectionDTO } from "src/dtos/bookmark/bookmark.collection.dto";
import { BookmarkService } from "./bookmark.service";
import { BookmarkCollectionItemResponse } from "src/dtos/bookmark/bookmark.collection.item.resonse";
import { BookmarkInfoDTO } from "src/dtos/bookmark/bookmark.info.dto";
export declare class BookmarkController {
    private readonly bookmarkService;
    constructor(bookmarkService: BookmarkService);
    getNextToken(nextToken: string | null | undefined): Promise<string>;
    bookmarkDetails(bookmarkCollectionDTO: BookmarkCollectionDTO): Promise<{
        status: number;
        message: string;
    }>;
    addBookmarkInfo(bookmarkInfoDto: BookmarkInfoDTO): Promise<any>;
    getBookmarkDetails(userId: string, nextToken?: string): Promise<BookmarkCollectionItemResponse>;
}
