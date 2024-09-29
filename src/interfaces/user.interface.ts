import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

// Interfaces
import { WorkInterface } from './work.interface';
import { SubscriptionInterface } from './subscription.interface';
import { NotificationInterface } from './notification.interface';
import { CompanyInterface } from './company.interface';
import { IdentityInterface } from './identity.interface';

// Enum
import { UserTypeEnum } from 'src/enums/user.type.enum';
import { LookingforEnum } from 'src/enums/lookingfor.enum';
import { WorkTypeEnum } from 'src/enums/work.type.enum';
import { CountryEnum } from 'src/enums/country.enum';
import { JobDurationEnum } from 'src/enums/job.duration.enum';
import { AudioTypeEnum } from 'src/enums/audio.type.enum';
import { JobStatusEnum } from 'src/enums/job.status.enum';
import { CountryPhoneCodeEnum } from 'src/enums/country.phone.code.enum';

export class UserInterface {
  _id?: Types.ObjectId;

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

  @ApiProperty({
    type: String,
    description: `The user's email address`,
  })
  email: string;

  identities: Array<IdentityInterface>;

  @ApiProperty({
    type: String,
    description: `The user's give name`,
  })
  firstName?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's last name`,
  })
  lastName?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's @username`,
  })
  username?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's job title`,
  })
  jobTitle?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `A description about the user`,
  })
  about?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's website`,
  })
  website?: string;

  @ApiProperty({
    type: String,
    enum: JobDurationEnum,
    default: JobDurationEnum.both,
    description: `The user's preferred work time`,
  })
  workTime?: string;

  @ApiProperty({
    type: String,
    enum: AudioTypeEnum,
    default: AudioTypeEnum.both,
    description: `The user's work if call, non-call, or both`,
  })
  audioType?: string;

  @ApiProperty({
    type: Array,
    default: [],
    description: `This is an array of <b>WorkInterface</b>. Check the <b>WorkInterface</b> interface for available properties`,
  })
  works?: Array<WorkInterface>;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's profile photo. This is AWS S3 key.`,
  })
  profilePhoto?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's profile video. This is AWS S3 key.`,
  })
  profileVideo?: string;

  @ApiProperty({
    type: String,
    enum: JobStatusEnum,
    default: JobStatusEnum.active,
    description: `If the user is active or inactive in the platform`,
  })
  jobStatus?: string;

  @ApiProperty({
    type: String,
    default: CountryPhoneCodeEnum.USA,
    enum: CountryPhoneCodeEnum,
    description: `These are United Nations enlisted countries and their 3-letter country codes. The system will map this to their numerical phone codes.`,
  })
  phoneCountryCode?: string;

  @ApiProperty({
    type: String,
    default: '',
    description: `The user's contact number`,
  })
  phoneNumber?: string;

  subscription?: SubscriptionInterface;

  notificationSettings?: NotificationInterface;

  @ApiProperty({
    type: String,
    default: '',
    description: `A company's business name. Applicable for company user type`,
  })
  company?: CompanyInterface;
}
