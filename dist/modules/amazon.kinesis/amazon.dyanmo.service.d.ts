export declare class AmazonDynamoDBService {
    private readonly dynamoDB;
    constructor();
    putItemtoDynamoDB(tabbleName: string, item: any): Promise<void>;
}
