import { ApiProperty } from "@nestjs/swagger";

export class CandidateWorkDto {

  @ApiProperty()
  id: string;
  @ApiProperty()
  userID: string;
  @ApiProperty({type: ()=>[String]})
  file: string[];
  @ApiProperty()
  projectTitle: string;
  @ApiProperty({type:()=> [String]})
  skills: string[];
  @ApiProperty({type:()=> [String]})
  tools: string[];
  @ApiProperty()
  projectDescription: string;
}