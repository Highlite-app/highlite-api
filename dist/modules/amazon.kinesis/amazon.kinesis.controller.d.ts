import { AmazonKinesisService } from "./amazon.kinesis.service";
import { DataDTO } from "src/dtos/aws.kinesis/data.dto";
export declare class AmazonKinesisController {
    private readonly kinesisService;
    constructor(kinesisService: AmazonKinesisService);
    receiveStreamData(dataDto: DataDTO): Promise<{
        message: string;
    } | undefined>;
}
