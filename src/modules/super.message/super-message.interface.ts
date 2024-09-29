import { ApiProperty } from '@nestjs/swagger';

export class SuperMessage {
  @ApiProperty({ description: 'The sender of the super message' })
  sender: string;

  @ApiProperty({ description: 'The recipient of the super message' })
  recipient: string;

  @ApiProperty({ description: 'The message content' })
  message: string;
}
