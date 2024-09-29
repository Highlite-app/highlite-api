import { Body, Controller, Post, NotFoundException } from "@nestjs/common";
import { BucketService } from "./bucket.service";
import { PresignedDto } from "src/dtos/presigned.request.dto";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { UrlReqiuestDto } from "src/dtos/url.request.dto";

@Controller('S3Bucket')
@ApiTags("S3-Bucket")
export class BucketController {

    constructor(private readonly bucketServie: BucketService) { }

    @Post('getPresignedUrlWithoutClient')
    async getPresignedUrlWithoutClient(@Body() presignedDto: PresignedDto): Promise<any> {

        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrl(
                presignedDto.fileName,
                presignedDto.type
            )


            return {
                status: true,
                data: {
                    message: "URL sucessfully Generated",
                    getPresignedURL: presignedUrl
                }

            }


        } catch (error) {
            console.error("Error handling file upload", error);

            throw new NotFoundException("Failed to handle file upload");

        }

    }

    @Post('createURLForMessagePhoto')
    async createURLForMessagePhoto(@Body() fileName: UrlReqiuestDto): Promise<any> {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(
                fileName.fileName,

            )
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }

            }


        } catch (error) {
            console.error("Error handling file upload", error);

            throw new NotFoundException("Failed to handle file upload");

        }

    }

    @Post('createURLForMessageVideo')
    async createURLForMessageVideo(@Body() fileName: UrlReqiuestDto): Promise<any> {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(
                fileName.fileName,

            )
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }

            }


        } catch (error) {
            console.error("Error handling file upload", error);

            throw new NotFoundException("Failed to handle file upload");

        }

    }


    @Post('createURLForMessageDocument')
    async createURLForMessageDocument(@Body() fileName: UrlReqiuestDto): Promise<any> {
        try {
            const presignedUrl = await this.bucketServie.generatePresignedUrlWithClient(
                fileName.fileName,

            )
            return {
                status: true,
                data: {
                    message: "Image Uploaded Successfully",
                    getPresignedURL: presignedUrl
                }

            }

        } catch (error) {
            console.error("Error handling file upload", error);

            throw new NotFoundException("Failed to handle file upload");

        }

    }



}

