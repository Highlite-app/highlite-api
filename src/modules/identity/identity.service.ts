import {
  HttpStatus,
  Injectable,
  BadRequestException,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, now, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import axios from 'axios';
import { decode } from 'jsonwebtoken';

// Configuration
import { googleStrategyConfig } from '../../configs/google.strategy.config';

// Schema
import { User } from '../../schemas/user.schema';
import { Pincode } from '../../schemas/pincode.schema';

// Interace
import { ResponseInterface } from '../../interfaces/response.interface';
import { OtpRequestInterface } from '../../interfaces/otp.request.interface';
import { OtpValidateInterface } from '../../interfaces/otp.validate.interface';
import { PincodeValidateInterface } from '../../interfaces/pincode.validate.interface';
import { GoogleIdentityInterface } from '../../interfaces/google.identity.interface';
import { FacebookIdentityInterface } from '../../interfaces/facebook.identity.interface';
import { AppleIdentityInterface } from '../../interfaces/apple.identity.interface';

// Services
import { CommunicationService } from '../communication/communication.service';
import { UserOnboardingInterface } from 'src/interfaces/user.onboarding.interface';
@Injectable()
export class IdentityService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Pincode') private readonly pincodeModel: Model<Pincode>,
    private communicationService: CommunicationService,
    private jwtService: JwtService,
    private readonly client: OAuth2Client,
  ) {
    this.client = new OAuth2Client(googleStrategyConfig);
  }
  private generateOTP(): string {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
  }
  public async checkUserExistence(email: string): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    // Logic
    try {
      const record: any = await this.userModel.findOne({ email: email });
      if (record != null) {
        response.data?.push(record);
      }
      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }
  public async sendPincode(
    request: OtpRequestInterface,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const pin: string = this.generateOTP();
    const content: string =
      '<table align="center" class="hi_table_2" width="600" >' +
      '<tbody>' +
      '<tr>' +
      '<td class="hi_td_2" width="596">' +
      '<h1 class="hi_text_2">Your Verification Code</h1>' +
      '<p class="hi_sub_text_2">' +
      'Please enter this code to Highlite to verify your email:' +
      '</p>' +
      '<p class="hi_text_3">' +
      pin +
      '</p>' +
      '<p class="hi_text_4">' +
      '<span class="hi_span_1"' +
      '>If you didn&#39;t request this, you can ignore this email or let ' +
      'us know. Contact us at </span' +
      '><span class="hi_span_2">support@highlite.app .</span>' +
      '</p>' +
      '<p class="hi_text_5">Thank you,<br /><br />Highlite Team</p>' +
      '<p class="hi_text_6">' +
      'This is an automated email, please do not reply.' +
      '</p>' +
      '</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>';
    const pincodeDocument: any = new this.pincodeModel({
      ...request,
      ...{ pin: pin, _id: new Types.ObjectId() },
    });

    // Create a document in pincode collection and email to use
    try {
      // Create the document
      const record: any = await pincodeDocument.save();

      // Send an email to user
      this.communicationService.sendEmail(
        request.email,
        null,
        'Highlite OTP',
        content,
      );

      // Prepare response
      response.data?.push({ pin: pin, document: record });
      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }
  public async validatePincode(
    request: OtpValidateInterface,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const query: any = this.pincodeModel.find();
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };

    // Logic
    try {
      const record: any = await query
        .where({
          email: request.email,
          pin: request.pin,
          usage: request.usage,
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.UNAUTHORIZED;
      } else {
        if (record.expirationDate < now()) {
          response.statusCode = HttpStatus.UNAUTHORIZED;
        } else {
          response.statusCode = HttpStatus.OK;
        }

        // Delete pincode
        await this.pincodeModel.findById(record._id).deleteOne();
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }
  public async createNewUser(
    userData: UserOnboardingInterface,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const newUser: any = new this.userModel(userData);

    // Logic
    try {
      const record: any = await newUser.save();
      response.data?.push(record);
      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }
  public async generateToken(
    request: PincodeValidateInterface,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    let jwt: string = '';
    const query: any = this.userModel.find();

    // Get record
    const record: any = await query
      .where({
        email: request.email,
      })
      .findOne();

    if (record == null) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      return response;
    } else {
      jwt = await this.jwtService.signAsync({
        email: request.email,
        sub: record != undefined ? record._id.toString() : '',
      });
      response.data?.push({ token: jwt });
      return response;
    }
  }
  public async validateGoogle(
    request: GoogleIdentityInterface,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: request.email,
          identities: {
            $elemMatch: {
              identity: 'google',
              'meta.sub': request.sub,
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.UNAUTHORIZED;
      } else {
        response.data?.push(record);
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async validateAndGetGoogleProfile(
    accessToken: string,
  ): Promise<ResponseInterface> {
    try {
      const token: any = await this.client.getTokenInfo(accessToken);
      const response: ResponseInterface = {
        statusCode: HttpStatus.OK,
        data: [],
        message: [],
      };

      // Validate token
      const audience: string | undefined | null = token?.aud;
      const email: string | undefined | null = token?.email;
      const sub: string | undefined | null = token?.sub;

      if (
        audience != undefined &&
        audience != null &&
        audience === googleStrategyConfig.clientId &&
        email != undefined &&
        email != null &&
        sub != undefined &&
        sub != null
      ) {
        response.data?.push({ email: email, sub: sub });
        return response;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error: any) {
      console.log(error.message);
      throw new BadRequestException();
    }
  }

  public async isGoogleIdentityExistingAndValid(
    email: string,
    googleSub: string,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: email,
          identities: {
            $elemMatch: {
              identity: 'google',
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.OK;
      } else {
        // Check if sub matches
        record.identities.forEach((identity: any) => {
          if (
            identity.identity == 'google' &&
            identity.identity.meta.sub != googleSub
          ) {
            response.statusCode = HttpStatus.UNAUTHORIZED;
          }
        });
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async addNewUserIdentity(
    email: string,
    identity: string,
    meta: any,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };

    try {
      const updateData = await this.userModel.findOneAndUpdate(
        {
          email,
        },
        {
          $push: {
            identities: {
              identity,
              meta,
            },
          },
        },
      );

      response.data?.push(updateData);
      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async validateFacebook(
    request: FacebookIdentityInterface,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: request.email,
          identities: {
            $elemMatch: {
              identity: 'facebook',
              'meta.sub': request.sub,
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.UNAUTHORIZED;
      } else {
        response.data?.push(record);
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async validateAndGetFacebookProfile(
    accessToken: string,
  ): Promise<ResponseInterface> {
    try {
      const response: ResponseInterface = {
        statusCode: HttpStatus.OK,
        data: [],
        message: [],
      };
      const facebookUrl: string =
        process.env.FACEBOOK_PROFILE_URL != undefined
          ? process.env.FACEBOOK_PROFILE_URL
          : '';
      const facebookFields: string =
        process.env.FACEBOOK_PROFILE_FIELDS != undefined
          ? process.env.FACEBOOK_PROFILE_FIELDS
          : '';

      if (facebookUrl == '') {
        throw new HttpException(
          'Missing ENV.FACEBOOK_PROFILE_URL',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (facebookFields == '') {
        throw new HttpException(
          'Missing ENV.FACEBOOK_PROFILE_FIELDS',
          HttpStatus.BAD_REQUEST,
        );
      }

      const requestUrl: string =
        facebookUrl +
        '?fields=' +
        facebookFields +
        '&access_token=' +
        accessToken;
      const token: any = await axios.get(requestUrl);

      // Validate token
      const email: string | undefined | null = token?.data.email;
      const sub: string | undefined | null = token?.data.id;

      if (
        email != undefined &&
        email != null &&
        sub != undefined &&
        sub != null
      ) {
        response.data?.push({ email: email, sub: sub });
        return response;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error: any) {
      throw new BadRequestException();
    }
  }

  public async isFacebookIdentityExistingAndValid(
    email: string,
    facebookSub: string,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: email,
          identities: {
            $elemMatch: {
              identity: 'facebook',
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.OK;
      } else {
        // Check if sub matches
        record.identities.forEach((identity: any) => {
          if (
            identity.identity == 'facebook' &&
            identity.identity.meta.sub != facebookSub
          ) {
            response.statusCode = HttpStatus.UNAUTHORIZED;
          }
        });
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async validateApple(
    request: AppleIdentityInterface,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: request.email,
          identities: {
            $elemMatch: {
              identity: 'apple',
              'meta.sub': request.sub,
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.UNAUTHORIZED;
      } else {
        response.data?.push(record);
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async validateAndGetAppleProfile(
    authorizationCode: string,
  ): Promise<ResponseInterface> {
    try {
      const response: ResponseInterface = {
        statusCode: HttpStatus.OK,
        data: [],
        message: [],
      };
      const appleAuthUrl: string =
        process.env.APPLE_AUTH_URL != undefined
          ? process.env.APPLE_AUTH_URL
          : '';

      const appleClientId: string =
        process.env.APPLE_CLIENT_ID != undefined
          ? process.env.APPLE_CLIENT_ID
          : '';

      const appleClientSecret: string =
        process.env.APPLE_CLIENT_SECRET != undefined
          ? process.env.APPLE_CLIENT_SECRET
          : '';

      if (appleAuthUrl == '') {
        throw new HttpException(
          'Missing ENV.APPLE_AUTH_URL',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (appleClientId == '') {
        throw new HttpException(
          'Missing ENV.APPLE_CLIENT_ID',
          HttpStatus.BAD_REQUEST,
        );
      }

      const appleResponse: any = await axios.post(
        appleAuthUrl,
        `client_id=${appleClientId}&client_secret=${appleClientSecret}&code=${authorizationCode}&grant_type=authorization_code`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      const token: any = decode(appleResponse.id_token, { complete: true });

      // Validate token
      const email: string | undefined | null = token?.email;
      const sub: string | undefined | null = token?.sub;

      if (
        email != undefined &&
        email != null &&
        sub != undefined &&
        sub != null
      ) {
        response.data?.push({ email: email, sub: sub });
        return response;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error: any) {
      throw new BadRequestException();
    }
  }

  public async isAppleIdentityExistingAndValid(
    email: string,
    appleSub: string,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const query: any = this.userModel.find();

    try {
      const record: any = await query
        .where({
          email: email,
          identities: {
            $elemMatch: {
              identity: 'apple',
            },
          },
        })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.OK;
      } else {
        // Check if sub matches
        record.identities.forEach((identity: any) => {
          if (
            identity.identity == 'apple' &&
            identity.identity.meta.sub != appleSub
          ) {
            response.statusCode = HttpStatus.UNAUTHORIZED;
          }
        });
      }

      return response;
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }

  public async getUserData(
    sub: string,
    email: string,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [],
      message: [],
    };
    const model: any = this.userModel.find();

    try {
      const record: any | null = await model
        .where({ _id: new Types.ObjectId(sub), email: email })
        .findOne();

      if (record == null) {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push(`No user record for ${email}`);
        return response;
      } else {
        response.data?.push(record);
        return response;
      }
    } catch (error: any) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(error.message);
      return response;
    }
  }
}
