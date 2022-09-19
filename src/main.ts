import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsFilter } from './exception/exceptions.filter';
import validationExceptionFactory from './exception/validation.exception.factory';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      exceptionFactory: validationExceptionFactory
    }
  ))
  app.useGlobalFilters(new ExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
