import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import * as dotenv from 'dotenv' ; 

async function bootstrap() {

  dotenv.config() ; 
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE ? process.env.SWAGGER_TITLE : '')
    .setDescription(
      process.env.SWAGGER_DESCRIPTION ? process.env.SWAGGER_DESCRIPTION : '',
    )
    .setVersion(
      process.env.SWAGGER_API_VERSION ? process.env.SWAGGER_API_VERSION : '',
    )
    .addBearerAuth()
    .build();

  // For Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    process.env.SWAGGER_URI ? process.env.SWAGGER_URI : 'api',
    app,
    document,
  );

  // For validation pipeline global effect
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(
    process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
  );

}
bootstrap();
