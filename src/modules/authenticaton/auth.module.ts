import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { User, UserSchema } from "src/schemas/user.schema";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "../JwtModule/jwt.startegy";
import { PassportModule } from "@nestjs/passport";
import { UserRepositoryImpl } from "./user.repository.impl";
import { JWTModule } from "../JwtModule/auth.module";
import { CreateUserHandler } from "./command/create.user.handler";
import { LoginHandler } from "./command/login.handler";

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '1h' },
        }),
        MongooseModule.forFeature([{name:User.name , schema : UserSchema}])
    ],
    controllers:[AuthController],
    providers:[JwtService  ,  JwtModule ,JWTModule ,  JwtStrategy , UserRepositoryImpl , 
    CreateUserHandler , LoginHandler  , {
        provide: 'UserRepository' , 
        useClass : UserRepositoryImpl
    }
    ] , 
    exports: [ CreateUserHandler , LoginHandler]
})
export class  AuthsModule{}