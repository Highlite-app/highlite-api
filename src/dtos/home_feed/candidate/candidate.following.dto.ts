import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CandidateFollowingDTO{

    @ApiProperty({ type: String, description: 'Unique identifier of the following instance.' })
    @Expose()
    id: string;

    @ApiProperty({ type: String, description: 'ID of the current user who is following.' })
    @Expose()
    currentUserID: string;

    @ApiProperty({ type: String, description: 'ID of the company associated with the job post.' })
    @Expose()
    companyId: string;

    @ApiProperty({ type: String, description: 'ID of the job post being followed.' })
    @Expose()
    jobPostId: string;

    @ApiProperty({ type: String, description: 'Status of the following instance.' })
    @Expose()
    status: string;


}