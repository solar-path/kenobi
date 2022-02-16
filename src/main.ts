import { NestFactory } from '@nestjs/core';
// import * as helmet from 'helmet';
import { AppModule } from './app.module';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(helmet());
  // app.use(csurf());
  await app.listen(3000);
}
bootstrap();
