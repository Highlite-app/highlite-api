import { BucketService } from "./bucket.service";
import { PresignedDto } from "src/dtos/presigned.request.dto";
import { UrlReqiuestDto } from "src/dtos/url.request.dto";
export declare class BucketController {
    private readonly bucketServie;
    constructor(bucketServie: BucketService);
    getPresignedUrlWithoutClient(presignedDto: PresignedDto): Promise<any>;
    createURLForMessagePhoto(fileName: UrlReqiuestDto): Promise<any>;
    createURLForMessageVideo(fileName: UrlReqiuestDto): Promise<any>;
    createURLForMessageDocument(fileName: UrlReqiuestDto): Promise<any>;
}
