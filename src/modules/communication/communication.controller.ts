import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

// Services
import { CommunicationService } from './communication.service';

// Guards
import { JwtAuthGuard } from '../../security/guards/jwt.guard';
@Controller('communication')
export class CommunicationController {
  constructor(private communicationService: CommunicationService) {}
}
