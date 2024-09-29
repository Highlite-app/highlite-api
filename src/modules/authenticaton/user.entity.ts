export class UserEntity{
    constructor(
        public firstName:string , 
        public email:string ,
        public provider: string , 
        public providerId: string , 
        public userType: string = 'user' , 
    ){}
}