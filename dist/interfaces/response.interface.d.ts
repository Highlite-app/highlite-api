import { HttpStatus } from '@nestjs/common';
export interface ResponseInterface {
    statusCode: HttpStatus;
    message?: Array<string>;
    data?: Array<any>;
}
