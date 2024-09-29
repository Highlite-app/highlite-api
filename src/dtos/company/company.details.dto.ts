import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CompanyOnBoardingDTO {
  @ApiProperty()
  companyId?: string;

  @ApiProperty({example : '0260 LABS LLC'})
  @IsNotEmpty({message:"Company ID Cannot Be Empty . Create a Company Profile To Get CompanyID"})
  @IsString()
  companyName: string;

  @ApiProperty({description :"This is industry" , example: 'IT' })
  @IsNotEmpty({message : "Industry canmnot be empty" })
  industry: string;

  @ApiProperty({example : 'Kolkata'})
  @IsNotEmpty({message:"City cannot empty"})
  city: string;

  @ApiProperty({example : 'India'})
  @IsNotEmpty({message:"Country cannot be  empty"})
  country: string;

  @ApiProperty()
  @IsNotEmpty({message: "Website cannot be emplty"})
  website: string;

  @ApiProperty({description:"company Size" , example: "0-100"})
  @IsNotEmpty({message: "Company size cannot be empty"})
  companySize: string;

  @ApiProperty({type: [String] , description: "Comapany Benifit" , example : ["Work From Home" , 'Health Insurance']})
  @IsNotEmpty({message :"Company benifit cannot be empty"})
  @IsArray()
  @IsString({each: true})
  benefits: string[];


  @ApiProperty({description : "About Company cannot be empty" , example : "Our company do strategy planning and development, media planning and buying, market research and brand development, promotions and sales tactics, data analytics and insights and advertising production across multiple media."})
  @IsNotEmpty()
  about: string;

  @ApiProperty({description : "emnail" , example : "mobiledev@srijanmukhopadhyay.com" })
  @IsNotEmpty({message: "Email Address is required to OnBoard a company"})
  email: string;

  @ApiProperty({description: "username" , example : "sreejan2306"})
  @IsNotEmpty({message: "Username cannot be empty"})
  userName: string;


  @ApiProperty({description: "username" , example : "sreejan2306" , required: false})
  companyLogo: string;

}
