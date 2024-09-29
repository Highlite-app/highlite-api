import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleLocalAuthGuard extends AuthGuard('google-local') {}
