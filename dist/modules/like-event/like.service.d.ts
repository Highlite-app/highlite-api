import { CreateLikeDTO } from "src/dtos/like/create.lile.dto";
export declare class LikeService {
    private readonly kinesisClient;
    constructor();
    putRecordToStream(createLikeDto: CreateLikeDTO): Promise<void>;
}
