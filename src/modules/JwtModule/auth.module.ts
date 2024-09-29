import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtServices } from "./jwt.service";
@Module({
    imports:[

        JwtModule.register({
            secret: JwtServices.generateSecretKey(),
            signOptions:{expiresIn :'1h'},
        })

    ],
    exports:[ JwtServices],
    providers:[JwtServices]
})
export class JWTModule{}