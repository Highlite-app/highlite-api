import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User  , UserDocument} from 'src/schemas/user.schema';

import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository ';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}


    async findOneByEmail(email: string): Promise<UserEntity | null> {
       const storeUserByEmail  =  await this.userModel.findOne({email}).exec() ; 

    

       if(!storeUserByEmail){
         return null ; 
       }

       const providerIds = `${storeUserByEmail.provider}Id` ; 


       return new UserEntity(
        storeUserByEmail.firstName , 
        storeUserByEmail.email , 
        storeUserByEmail.provider , 
        storeUserByEmail.get(providerIds) , 
        storeUserByEmail.userType

      )

    }

  

    async findOneByProviderId(providerId: string, provider: string): Promise<UserEntity | null> {


        const saveUserByProviderId =  await this.userModel.findOne({providerId}).exec();

        if(!saveUserByProviderId){
          return null ; 
        }

        const providerIds = `${saveUserByProviderId.provider}Id` ; 

        return new UserEntity(
          saveUserByProviderId.firstName , 
          saveUserByProviderId.email , 
          saveUserByProviderId.provider , 
          saveUserByProviderId.get(providerIds) , 
          saveUserByProviderId.userType

        )

    }
    async  save(userEntity: UserEntity): Promise<UserEntity> {
      const providerIdField = `${userEntity.provider}Id`;
       const userDoc = new this.userModel({
        firstName: userEntity.firstName , 
        email : userEntity.email , 
        [providerIdField] : userEntity.providerId , 
        provider : userEntity.provider , 
        userType : userEntity.userType
       }) ; 
      
       const savedUser  = await userDoc.save() ; 
       return new UserEntity(
        savedUser.firstName,
        savedUser.email  , 
        savedUser.provider , 
        savedUser.get(providerIdField) , 
        savedUser.userType 
        
       )

    }

}
