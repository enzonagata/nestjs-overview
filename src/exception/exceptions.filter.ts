import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('Call exception filter...');
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    // Para usar com o validation.exeption.factory
    // const statusCode = exception.response.statusCode;
    // response.status(statusCode).send(this.buildError(exception.response.validationResult, statusCode));

    response
      .status(exception.status)
      .send(this.buildError(exception.response.message, exception.status));
  }

  buildError(message: string, status: number, errors?: any[]) {
    const res = new ResponseModel();
    res.status = status;
    res.message = message;

    if (errors) {
      res.errors = errors;
    }
    return res;
  }
}

export class ResponseModel {
  status: number;
  errors: any;
  message: string;
}
