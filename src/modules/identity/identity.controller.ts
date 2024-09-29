import {
  Body,
  Controller,
  Get,
  Req,
  Post,
  HttpStatus,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { Types } from 'mongoose';

// Services
import { IdentityService } from './identity.service';

// Dto
import { OtpRequestDto } from '../../dtos/otp.request.dto';
import { OtpValidateDto } from '../../dtos/otp.validate.dto';
import { PincodeDto } from '../../dtos/pincode.dto';
import { GoogleDto } from '../../dtos/google.dto';
import { FacebookDto } from '../../dtos/facebook.dto';
import { AppleDto } from '../../dtos/apple.dto';

// Interface
import { ResponseInterface } from '../../interfaces/response.interface';
import { PincodeValidateInterface } from 'src/interfaces/pincode.validate.interface';

// Guards
import { PincodeLocalAuthGuard } from '../../security/guards/pincode.local.guard';
import { JwtAuthGuard } from '../../security/guards/jwt.guard';
import { GoogleLocalAuthGuard } from '../../security/guards/google.local.guard';
import { FacebookLocalAuthGuard } from '../../security/guards/facebook.local.guard';
import { AppleLocalAuthGuard } from '../../security/guards/apple.local.guard';

// Enum
import { OtpUsageEnum } from 'src/enums/otp.usage.enum';

// Swagger
import { ResponseSwagger } from 'src/swagger/response.swagger';

@Controller('identity')
export class IdentityController {
  constructor(private identityService: IdentityService) {}

  @ApiTags('Onboarding')
  @ApiOperation({
    summary: 'Sends a one-time pin to a user signing up using an email.',
    description: 'Sends a one-time pin to a user signing up using an email.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The one-time pin is successfully sent to the user.',
    type: ResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description:
      'The one-time pin is not sent to the user. Check the <b>message</b> key for the error(s)',
    type: ResponseSwagger,
  })
  @Post('onboarding/signup/email/send-otp')
  async onboardingEmailSendOtp(
    @Body() request: OtpRequestDto,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: 200,
      data: [],
      message: [],
    };

    // Check if user exists
    const checkUser: ResponseInterface =
      await this.identityService.checkUserExistence(request.email);

    // If there is an error when checking user existence
    if (checkUser.statusCode === HttpStatus.BAD_REQUEST) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    } else {
      // Check if the data key exists
      if (checkUser?.data != undefined) {
        // If user exists
        if (checkUser.data[0] != null) {
          response.statusCode = HttpStatus.BAD_REQUEST;
          response.message?.push(
            'An account already exists with this email address.',
            'You can login or try again with a different account?',
          );
          return response;
        } else {
          const pincode: ResponseInterface =
            await this.identityService.sendPincode(request);
          // If sending an OTP failed
          if (pincode.statusCode === HttpStatus.BAD_REQUEST) {
            response.statusCode = HttpStatus.BAD_REQUEST;
            response.message?.push(
              'Opps, something went wrong. Please try again?',
            );
            return response;
          } else {
            response.statusCode = HttpStatus.OK;
            response.message?.push(
              `We\'ve sent a code to <b>${request.email}</b><br /><br />Enter your verification code below:`,
            );
            return response;
          }
        }
      } else {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push('Opps, something went wrong. Please try again?');
        return response;
      }
    }
  }

  @Post('onboarding/signup/email/validate-otp')
  @ApiTags('Onboarding')
  async onboardingEmailValidateOtp(
    @Body() request: OtpValidateDto,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: 200,
      data: [],
      message: [],
    };

    // Validate OTP
    const otpCheck: ResponseInterface =
      await this.identityService.validatePincode(request);
    if (otpCheck.statusCode === HttpStatus.BAD_REQUEST) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    } else if (otpCheck.statusCode === HttpStatus.UNAUTHORIZED) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push(
        'The code you entered is incorrect. Please try again?',
      );
      return response;
    } else {
      // Create user
      const newUser: ResponseInterface =
        await this.identityService.createNewUser({
          _id: new Types.ObjectId(),
          userType: request.user.userType,
          lookingFor: request.user.lookingFor,
          skills: request.user.skills,
          tools: request.user.tools,
          workType: request.user.workType,
          hourlyRate: request.user.hourlyRate,
          city: request.user.city,
          country: request.user.country,
          email: request.email,
          identities: [{ identity: 'email', meta: {} }],
        });

      if (newUser.statusCode === HttpStatus.BAD_REQUEST) {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push('Opps, something went wrong. Please try again?');
        return response;
      } else {
        const token: ResponseInterface =
          await this.identityService.generateToken(request);
        if (token.statusCode === HttpStatus.BAD_REQUEST) {
          response.statusCode = HttpStatus.BAD_REQUEST;
          response.message?.push(
            'Opps, something went wrong. Please try again?',
          );
          return response;
        } else {
          return token;
        }
      }
    }
  }

  @Post('onboarding/signup/google')
  @ApiTags('Onboarding')
  async OnboardingGoogle(
    @Body() request: GoogleDto,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: 200,
      data: [],
      message: [],
    };

    // Validate the request
    const validateRequest: ResponseInterface =
      await this.identityService.validateAndGetGoogleProfile(
        request.accessToken,
      );
    const email: string =
      validateRequest.data != undefined ? validateRequest.data[0].email : '';
    const sub: string =
      validateRequest.data != undefined ? validateRequest.data[0].sub : '';

    // Check if google exists and matches Google sub
    const googleExists: ResponseInterface =
      await this.identityService.isGoogleIdentityExistingAndValid(email, sub);
    if (googleExists.statusCode == HttpStatus.BAD_REQUEST) {
      return googleExists;
    } else if (googleExists.statusCode == HttpStatus.UNAUTHORIZED) {
      throw new UnauthorizedException();
    }

    // Check if user exists
    const checkUser: ResponseInterface =
      await this.identityService.checkUserExistence(email);

    // If there is an error when checking user existence
    if (checkUser.statusCode === HttpStatus.BAD_REQUEST) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    } else {
      // Check if the data key exists
      if (checkUser?.data != undefined) {
        // If user exists
        if (checkUser.data[0] != null) {
          // Get token
          const tokenPayload: PincodeValidateInterface = {
            email: email,
            usage: OtpUsageEnum.onboarding,
            pin: null,
          };

          // Update user identities
          const userIdentities: ResponseInterface =
            await this.identityService.addNewUserIdentity(email, 'google', {
              sub,
            });

          if (userIdentities.statusCode === HttpStatus.OK) {
            const token: ResponseInterface =
              await this.identityService.generateToken(tokenPayload);
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              token.message?.push(
                'Opps, something went wrong. Please try again?',
              );
            }
            return token;
          } else {
            return userIdentities;
          }
        } else {
          // If no duplicate account then create
          const newUser: ResponseInterface =
            await this.identityService.createNewUser({
              _id: new Types.ObjectId(),
              userType: request.user.userType,
              lookingFor: request.user.lookingFor,
              skills: request.user.skills,
              tools: request.user.tools,
              workType: request.user.workType,
              hourlyRate: request.user.hourlyRate,
              city: request.user.city,
              country: request.user.country,
              email: email,
              identities: [{ identity: 'google', meta: { sub } }],
            });
          if (newUser.statusCode === HttpStatus.BAD_REQUEST) {
            response.statusCode = HttpStatus.BAD_REQUEST;
            response.message?.push(
              'Opps, something went wrong. Please try again?',
            );
            return response;
          } else {
            const token: ResponseInterface =
              await this.identityService.generateToken({
                email,
                usage: OtpUsageEnum.onboarding,
                pin: null,
              });
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              response.statusCode = HttpStatus.BAD_REQUEST;
              response.message?.push(
                'Opps, something went wrong. Please try again?',
              );
              return response;
            } else {
              return token;
            }
          }
        }
      } else {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push('Opps, something went wrong. Please try again?');
        return response;
      }
    }
  }

  @Post('onboarding/signup/facebook')
  @ApiTags('Onboarding')
  async OnboardingFacebook(
    @Body() request: FacebookDto,
  ): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: 200,
      data: [],
      message: [],
    };

    // Validate the request
    const validateRequest: ResponseInterface =
      await this.identityService.validateAndGetFacebookProfile(
        request.accessToken,
      );
    const email: string =
      validateRequest.data != undefined ? validateRequest.data[0].email : '';
    const sub: string =
      validateRequest.data != undefined ? validateRequest.data[0].sub : '';

    // Check if google exists and matches Google sub
    const facebookExists: ResponseInterface =
      await this.identityService.isFacebookIdentityExistingAndValid(email, sub);
    if (facebookExists.statusCode == HttpStatus.BAD_REQUEST) {
      return facebookExists;
    } else if (facebookExists.statusCode == HttpStatus.UNAUTHORIZED) {
      throw new UnauthorizedException();
    }

    // Check if user exists
    const checkUser: ResponseInterface =
      await this.identityService.checkUserExistence(email);

    // If there is an error when checking user existence
    if (checkUser.statusCode === HttpStatus.BAD_REQUEST) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    } else {
      // Check if the data key exists
      if (checkUser?.data != undefined) {
        // If user exists
        if (checkUser.data[0] != null) {
          // Get token
          const tokenPayload: PincodeValidateInterface = {
            email: email,
            usage: OtpUsageEnum.onboarding,
            pin: null,
          };

          // Update user identities
          const userIdentities: ResponseInterface =
            await this.identityService.addNewUserIdentity(email, 'facebook', {
              sub,
            });

          if (userIdentities.statusCode === HttpStatus.OK) {
            const token: ResponseInterface =
              await this.identityService.generateToken(tokenPayload);
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              token.message?.push(
                'Opps, something went wrong. Please try again?',
              );
            }
            return token;
          } else {
            return userIdentities;
          }
        } else {
          // If no duplicate account then create
          const newUser: ResponseInterface =
            await this.identityService.createNewUser({
              _id: new Types.ObjectId(),
              userType: request.user.userType,
              lookingFor: request.user.lookingFor,
              skills: request.user.skills,
              tools: request.user.tools,
              workType: request.user.workType,
              hourlyRate: request.user.hourlyRate,
              city: request.user.city,
              country: request.user.country,
              email: email,
              identities: [{ identity: 'facebook', meta: { sub } }],
            });
          if (newUser.statusCode === HttpStatus.BAD_REQUEST) {
            response.statusCode = HttpStatus.BAD_REQUEST;
            response.message?.push(
              'Opps, something went wrong. Please try again?',
            );
            return response;
          } else {
            const token: ResponseInterface =
              await this.identityService.generateToken({
                email,
                usage: OtpUsageEnum.onboarding,
                pin: null,
              });
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              response.statusCode = HttpStatus.BAD_REQUEST;
              response.message?.push(
                'Opps, something went wrong. Please try again?',
              );
              return response;
            } else {
              return token;
            }
          }
        }
      } else {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push('Opps, something went wrong. Please try again?');
        return response;
      }
    }
  }

  @Post('onboarding/signup/apple')
  @ApiTags('Onboarding')
  async OnboardingApple(@Body() request: AppleDto): Promise<ResponseInterface> {
    // Variables/constants
    const response: ResponseInterface = {
      statusCode: 200,
      data: [],
      message: [],
    };

    // Validate the request
    const validateRequest: ResponseInterface =
      await this.identityService.validateAndGetAppleProfile(
        request.authorizationCode,
      );
    const email: string =
      validateRequest.data != undefined ? validateRequest.data[0].email : '';
    const sub: string =
      validateRequest.data != undefined ? validateRequest.data[0].sub : '';

    // Check if google exists and matches Google sub
    const appleExists: ResponseInterface =
      await this.identityService.isAppleIdentityExistingAndValid(email, sub);
    if (appleExists.statusCode == HttpStatus.BAD_REQUEST) {
      return appleExists;
    } else if (appleExists.statusCode == HttpStatus.UNAUTHORIZED) {
      throw new UnauthorizedException();
    }

    // Check if user exists
    const checkUser: ResponseInterface =
      await this.identityService.checkUserExistence(email);

    // If there is an error when checking user existence
    if (checkUser.statusCode === HttpStatus.BAD_REQUEST) {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    } else {
      // Check if the data key exists
      if (checkUser?.data != undefined) {
        // If user exists
        if (checkUser.data[0] != null) {
          // Get token
          const tokenPayload: PincodeValidateInterface = {
            email: email,
            usage: OtpUsageEnum.onboarding,
            pin: null,
          };

          // Update user identities
          const userIdentities: ResponseInterface =
            await this.identityService.addNewUserIdentity(email, 'apple', {
              sub,
            });

          if (userIdentities.statusCode === HttpStatus.OK) {
            const token: ResponseInterface =
              await this.identityService.generateToken(tokenPayload);
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              token.message?.push(
                'Opps, something went wrong. Please try again?',
              );
            }
            return token;
          } else {
            return userIdentities;
          }
        } else {
          // If no duplicate account then create
          const newUser: ResponseInterface =
            await this.identityService.createNewUser({
              _id: new Types.ObjectId(),
              userType: request.user.userType,
              lookingFor: request.user.lookingFor,
              skills: request.user.skills,
              tools: request.user.tools,
              workType: request.user.workType,
              hourlyRate: request.user.hourlyRate,
              city: request.user.city,
              country: request.user.country,
              email: email,
              identities: [{ identity: 'apple', meta: { sub } }],
            });
          if (newUser.statusCode === HttpStatus.BAD_REQUEST) {
            response.statusCode = HttpStatus.BAD_REQUEST;
            response.message?.push(
              'Opps, something went wrong. Please try again?',
            );
            return response;
          } else {
            const token: ResponseInterface =
              await this.identityService.generateToken({
                email,
                usage: OtpUsageEnum.onboarding,
                pin: null,
              });
            if (token.statusCode === HttpStatus.BAD_REQUEST) {
              response.statusCode = HttpStatus.BAD_REQUEST;
              response.message?.push(
                'Opps, something went wrong. Please try again?',
              );
              return response;
            } else {
              return token;
            }
          }
        }
      } else {
        response.statusCode = HttpStatus.BAD_REQUEST;
        response.message?.push('Opps, something went wrong. Please try again?');
        return response;
      }
    }
  }

  // Include in the documentation that this API, if has error throws Unauthorized error instead of standard ResponseInterface
  @UseGuards(PincodeLocalAuthGuard)
  @Post('authenticate/otp')
  @ApiTags('Sign-in')
  async authenticateOtp(
    @Body() request: PincodeDto,
  ): Promise<ResponseInterface> {
    const token: ResponseInterface =
      await this.identityService.generateToken(request);
    if (token.statusCode === HttpStatus.BAD_REQUEST) {
      token.message?.push('Opps, something went wrong. Please try again?');
    }

    return token;
  }

  @Post('authenticate/google')
  @UseGuards(GoogleLocalAuthGuard)
  @ApiTags('Sign-in')
  @ApiBody({ type: GoogleDto })
  async authenticateGoogle(
    @Request() request: any | GoogleDto | ResponseInterface,
  ) {
    const tokenPayload: PincodeValidateInterface = {
      email: request.user.data[0].email,
      usage: OtpUsageEnum.login,
      pin: null,
    };

    const token: ResponseInterface =
      await this.identityService.generateToken(tokenPayload);
    if (token.statusCode === HttpStatus.BAD_REQUEST) {
      token.message?.push('Opps, something went wrong. Please try again?');
    }

    return token;
  }

  @Post('authenticate/facebook')
  @UseGuards(FacebookLocalAuthGuard)
  @ApiTags('Sign-in')
  @ApiBody({ type: FacebookDto })
  async authenticateFacebook(
    @Request() request: any | FacebookDto | ResponseInterface,
  ) {
    const tokenPayload: PincodeValidateInterface = {
      email: request.user.data[0].email,
      usage: OtpUsageEnum.login,
      pin: null,
    };

    const token: ResponseInterface =
      await this.identityService.generateToken(tokenPayload);
    if (token.statusCode === HttpStatus.BAD_REQUEST) {
      token.message?.push('Opps, something went wrong. Please try again?');
    }

    return token;
  }

  @Post('authenticate/apple')
  @UseGuards(AppleLocalAuthGuard)
  @ApiTags('Sign-in')
  @ApiBody({ type: AppleDto })
  async authenticateApple(
    @Request() request: any | AppleDto | ResponseInterface,
  ) {
    const tokenPayload: PincodeValidateInterface = {
      email: request.user.data[0].email,
      usage: OtpUsageEnum.login,
      pin: null,
    };

    const token: ResponseInterface =
      await this.identityService.generateToken(tokenPayload);
    if (token.statusCode === HttpStatus.BAD_REQUEST) {
      token.message?.push('Opps, something went wrong. Please try again?');
    }

    return token;
  }

  @Post('send-pincode')
  @ApiTags('Identity')
  async sendPincode(
    @Body() request: OtpRequestDto,
  ): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: 200,
      message: [
        `We\'ve sent a code to <b>${request.email}</b><br /><br />Enter your verification code below:`,
      ],
    };
    const record: ResponseInterface =
      await this.identityService.sendPincode(request);

    if (record.statusCode === HttpStatus.OK) {
      return response;
    } else {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.message?.push('Opps, something went wrong. Please try again?');
      return response;
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiTags('Identity')
  getProfile(@Req() req: any) {
    return req.user;
  }
}
