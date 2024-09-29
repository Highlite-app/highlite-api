import { BookmarkCollectionDTO } from "src/dtos/bookmark/bookmark.collection.dto";
import { BookmarkService } from "./bookmark.service";
import { BookmarkCollectionItemResponse } from "src/dtos/bookmark/bookmark.collection.item.resonse";
export declare class BookmarkController {
    private readonly bookmarkService;
    constructor(bookmarkService: BookmarkService);
    getNextToken(nextToken: string | null | undefined): Promise<string>;
    bookmarkDetails(bookmarkCollectionDTO: BookmarkCollectionDTO): Promise<{
        status: number;
        message: string;
    }>;
    getBookmarkDetails(userId: string, nextToken?: string): Promise<BookmarkCollectionItemResponse>;
}
