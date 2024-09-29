import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as crypto from 'crypto';

@Injectable()
export class JwtServices{
    constructor(private readonly jwtService: JwtService){}

   static generateSecretKey():string {
       let key  = crypto.randomBytes(32).toString('hex');
       return key ; 
    }
   
    async generateToken(payload: any):Promise<string> {
        return  this.jwtService.sign(payload)
    }

    


}