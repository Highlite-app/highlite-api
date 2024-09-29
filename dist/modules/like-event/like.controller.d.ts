import { LikeService } from "./like.service";
import { CreateLikeDTO } from "src/dtos/like/create.lile.dto";
export declare class LikeController {
    private readonly likeService;
    constructor(likeService: LikeService);
    likePost(createLikeDto: CreateLikeDTO): Promise<{
        message: string;
    }>;
}
