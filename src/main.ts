import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
// import * as csurf from 'csurf';
// import bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Adam')
    .setDescription("The Adam's API description")
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.use(helmet());
  // app.use(bodyParser());
  // app.use(csurf());
  await app.listen(3000);
}
bootstrap();
