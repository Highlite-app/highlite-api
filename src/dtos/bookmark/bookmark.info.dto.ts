import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';

export class BookmarkInfoDTO{

    @ApiProperty({ description: "This is the Bookmark Info ID", example: 'binfo123', })
    bookmarkInfoId: string;

    @ApiProperty({ description: "Type of the bookmark info", example: 'companyOnboarding',})
    @IsNotEmpty({ message: "Type cannot be empty" })
    @IsString()
    type: string;


    @ApiProperty({ description: "ID of the bookmark collection", example: 'bcol123', })
   
    bookmarkCollectionId:  string | null | undefined;

    @ApiProperty({ description: "Reference ID for the bookmark", example: 'ref123',  })
    @IsNotEmpty({ message: "Reference ID cannot be empty" })
    @IsString()
    referenceId: string;


    @ApiProperty({ description: "Candidate ID for the bookmark", example: 'ref123',  })
    candidateId?: string | null | undefined;


    @ApiProperty({ description: "Company ID for the bookmark", example: 'ref123',})
    companyId?:  string | null | undefined;
}



