import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';
import { ExceptionsFilter } from './exception/exceptions.filter';
import validationExceptionFactory from './exception/factories/validation.exception.factory';
import { logger } from './middleware/logger.middleware';

import * as bodyParser from 'body-parser';
import { ResponseInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.use(logger);
  app.useGlobalPipes(new ValidationPipe());

  // app.useGlobalInterceptors(new ResponseInterceptor());

  // app.useGlobalGuards(new AuthGuard())

  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   exceptionFactory: validationExceptionFactory
  // }))

  // app.useGlobalFilters(new ExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
