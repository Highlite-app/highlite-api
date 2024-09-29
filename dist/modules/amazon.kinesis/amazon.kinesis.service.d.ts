import { DataDTO } from "src/dtos/aws.kinesis/data.dto";
export declare class AmazonKinesisService {
    private readonly kinesis;
    private readonly dynamoDB;
    private readonly dynamoDBService;
    constructor();
    putItemtoDynamoDB(tabbleName: string, item: any): Promise<void>;
    putRecordToStreamAndMongDB(tableName: string, streamName: string, dataDTO: DataDTO): Promise<void>;
}
