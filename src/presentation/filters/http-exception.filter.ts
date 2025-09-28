import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const originResponse = exception.getResponse();
    let message = 'Unexpected error';
    let error = 'Internal Server Error';

    if (typeof originResponse === 'string') {
      message = originResponse;
    }

    if (typeof originResponse === 'object' && originResponse !== null) {
      message = (originResponse as any).message || message;
      error = (originResponse as any).error || error;
    }

    response
      .status(status)
      .json({
        statusCode: status,
        message: message,
        error: error,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}