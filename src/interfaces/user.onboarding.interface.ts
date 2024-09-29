import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

// Interfaces
import { IdentityInterface } from './identity.interface';

// Enum
import { UserTypeEnum } from 'src/enums/user.type.enum';
import { LookingforEnum } from 'src/enums/lookingfor.enum';
import { WorkTypeEnum } from 'src/enums/work.type.enum';
import { CountryEnum } from 'src/enums/country.enum';

export class UserOnboardingInterface {
  _id: Types.ObjectId;

  @ApiProperty({
    type: String,
    default: UserTypeEnum.candidate,
    description: `The value is in [${Object.values(UserTypeEnum)}]`,
    enum: UserTypeEnum,
  })
  userType: string;

  @ApiProperty({
    type: String,
    default: LookingforEnum.looking,
    description: `The value is in [${Object.values(LookingforEnum)}]`,
    enum: LookingforEnum,
  })
  lookingFor: string;

  @ApiProperty({
    type: Array<string>,
    default: [],
    description: `The skills of the candidate or the skills a company is looking for`,
  })
  skills: Array<string>;

  @ApiProperty({
    type: Array<string>,
    default: [],
    description: `The tools of the of the candidate or the tools a company is looking for`,
  })
  tools: Array<string>;

  @ApiProperty({
    type: String,
    default: WorkTypeEnum.both,
    description: `The value is in [${Object.values(WorkTypeEnum)}]`,
    enum: WorkTypeEnum,
  })
  workType: string;

  @ApiProperty({
    type: String,
    default: '$50',
    description: `The hourly rate of a candidate`,
  })
  hourlyRate: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The city the user is living in`,
  })
  city: string;

  @ApiProperty({
    type: String,
    enum: CountryEnum,
    default: CountryEnum.USA,
    description: `The country the user is living`,
  })
  country: string;

  identities: Array<IdentityInterface>;
  email: string;
}
