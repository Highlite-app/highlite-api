import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AppleLocalAuthGuard extends AuthGuard('apple-local') {}
