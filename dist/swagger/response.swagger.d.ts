import { HttpStatus } from '@nestjs/common';
export declare class ResponseSwagger {
    statusCode: HttpStatus;
    data?: Array<object>;
    message?: Array<string>;
}
