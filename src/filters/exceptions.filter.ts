import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    console.log('Call exception filter...');
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    response.status(response.statusCode).send(this.buildError(exception.message, response.statusCode));
  }

  buildError(
    message: string,
    status: number,
    errors?: any[]
  ) {
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


