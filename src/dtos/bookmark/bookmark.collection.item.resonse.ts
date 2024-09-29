import { BookmarkCollection } from "./bookmark.collection";
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class BookmarkCollectionItemResponse{
    @ApiProperty({ type: [BookmarkCollection] })
    @Type(() => BookmarkCollection)
    @Expose()
    items: BookmarkCollection[];
  
    @ApiProperty({ required: false })
    @Expose()
    nextToken?: string | null;
}