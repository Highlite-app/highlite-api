import { ApiOperation, ApiProperty } from "@nestjs/swagger";

export class CreateLikeDTO {

    @ApiProperty({
        description: "The ID of the JobPost being liked",
        example: "398827e2-100b-428d-88f8-9fc261d07c3a"
    })
    JobPostID: string;


    @ApiProperty({
        description: "The ID of the comapany posted the JOB",
        example: "398827e2-100b-428d-88f8-9fc261d07c3a"
    })
    companyID: string;


    @ApiProperty({
        description: "This is the UserID from which Job Post is getting like ",
        example: "398827e2-100b-428d-88f8-9fc261d07c3a"
    })
    userID: string
}