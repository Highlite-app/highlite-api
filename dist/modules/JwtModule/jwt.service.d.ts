import { JwtService } from "@nestjs/jwt";
export declare class JwtServices {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    static generateSecretKey(): string;
    generateToken(payload: any): Promise<string>;
}
