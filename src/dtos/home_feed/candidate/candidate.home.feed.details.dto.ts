import { ApiProperty } from "@nestjs/swagger";

export class CandidateHomeFeedDetailsDTO {

    @ApiProperty({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec52" })
    candidateHomeFeedDetailsId: string;

    @ApiProperty({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec53" })
    candidateId: string;


    @ApiProperty({ example: "bf7682a1-78f2-493a-9df2-7e4fd1eeec54" })
    candidateVideoFeedId: string;

    @ApiProperty({ example: "4", default: "0" })
    like: string

    @ApiProperty({ example: "2", default: "0" })
    share: string;


    @ApiProperty({ example: "3", default: "0" })
    follows: string;

    @ApiProperty({ example: "3", default: "0" })
    following: string;

    @ApiProperty({ example: "2", default: "0" })
    profileVisit: string;


    @ApiProperty({ example: "0", default: "0" })
    bookmark: string;


}