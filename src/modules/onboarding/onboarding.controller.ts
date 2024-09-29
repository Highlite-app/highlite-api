import { Controller, HttpStatus, Request, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Interface
import { ResponseInterface } from '../../interfaces/response.interface';

@Controller('onBoarding')
export class OnboardingController {
  @Get('splash')
  @ApiTags('OnBoarding')
  async getSplashContent(@Request() request: any): Promise<ResponseInterface> {
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      data: [{ messages: [] }],
      message: [],
    };
    if (response.data != undefined) {
      response.data[0].messages?.push("The world's simplest job-matching app.");
      response.data[0].messages?.push('Find your dream job.');
      response.data[0].messages?.push('Hire your rockstar candidate.');
      response.data[0].messages?.push('Get matches in 5 minutes or less.');
    } else {
      response.statusCode = HttpStatus.BAD_REQUEST;
      response.data = [];
      response.message?.push('Opps, something went wrong. Please try again?');
    }
    return response;
  }

 
}
