import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseSwagger {
  @ApiProperty({
    description: `The value is in [${HttpStatus.OK},${HttpStatus.BAD_REQUEST}]`,
  })
  statusCode: HttpStatus;
  @ApiProperty({
    description:
      'This is an array of objects. A member contains the data from a query or parsing.',
  })
  data?: Array<object>;
  @ApiProperty({
    description:
      'This is an array of string. A member is one message. This is usually filled up with error messages',
  })
  message?: Array<string>;
}
