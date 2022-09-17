import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new LoggerMiddleware();
  app.use(logger.use);
  await app.listen(3000);
}
bootstrap();
