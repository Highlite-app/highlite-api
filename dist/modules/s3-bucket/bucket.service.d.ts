export declare class BucketService {
    private s3;
    constructor();
    generatePresignedUrl(fileName: string, fileType: string): Promise<string>;
    generatePresignedUrlWithClient(fileName: string): Promise<string>;
}
