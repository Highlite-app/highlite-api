import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FacebookLocalAuthGuard extends AuthGuard('facebook-local') {}
