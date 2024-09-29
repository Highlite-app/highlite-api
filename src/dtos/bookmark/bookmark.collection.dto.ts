import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BookmarkInfoDTO } from './bookmark.info.dto';

export class BookmarkCollectionDTO {

    @ApiProperty({ description: "This is the Bookmark ID", example: '98827e2-100b-428d-88f8-9fc261d07c3a', required: false })
    bookmarkId: string ; 

    @ApiProperty({ description: "This is the User ID , it can be a candidateId or a companyId", example: 'user123', required: true })
    @IsNotEmpty({ message: "User ID cannot be empty" })
    @IsString()
    userId: string;
  
    @ApiProperty({ description: "This is the title of the bookmark", example: 'My Bookmark Collection', required: true })
    @IsNotEmpty({ message: "Title cannot be empty" })
    @IsString()
    title: string;
  
    @ApiProperty({ description: "Flag indicating if the bookmark is deleted", example: 'false', required: true , default:false })
    @IsNotEmpty({ message: "IsDeleted cannot be empty" })
    @IsString()
    isDeleted: string;


    @ApiProperty({ description: "List of bookmark info", type: [BookmarkInfoDTO], required: true })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BookmarkInfoDTO)
    bookmarkInfo: BookmarkInfoDTO[];



}