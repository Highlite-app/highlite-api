
import { ApiProperty } from "@nestjs/swagger"
import { CandidateWorkDto } from "./candidate.work.dto"

export class CandidateWorkResponseDto{

    @ApiProperty({ type: () => [CandidateWorkDto] })
    items: CandidateWorkDto[];
}