import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class PincodeLocalAuthGuard extends AuthGuard('pincode-local') {}
