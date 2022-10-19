/*
  Available built-in HTTP exceptions
  - Common: BadRequestException 400 / ImATeapotException 418
  - Authentication: UnauthorizedException 401
  - Authorization: ForbiddenException 403
  - Error: InternalServerErrorException 500
*/

import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const error = exception.getResponse() as string | { message: string | string[] };

    if (typeof error === 'string') {
      return response.status(status).json({ message: error });
    }

    return response.status(status).json({ message: error.message });
  }
}
