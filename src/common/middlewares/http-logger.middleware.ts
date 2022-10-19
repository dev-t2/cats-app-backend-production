import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

interface IRequest extends Request {
  user?: { id: number };
}

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: IRequest, res: Response, next: NextFunction) {
    const startTime = Date.now();

    res.on('finish', () => {
      const contentLength = res.getHeader('content-length') || 0;

      const responseTime = Date.now() - startTime;

      if (process.env.NODE_ENV !== 'production') {
        this.logger.log(
          `${req.method} ${req.originalUrl} ${res.statusCode} - ${contentLength} \x1b[33m+${responseTime}ms`,
        );
      } else {
        const ip = req.ip || req.socket.remoteAddress;
        const userId = req.user?.id || 0;
        const referrer = req.header('Referer') || req.header('Referrer') || '-';
        const userAgent = req.header('user-agent');

        this.logger.log(
          `${ip} - ${userId} "${req.method} ${req.originalUrl} HTTP/${req.httpVersion}" ${res.statusCode} - ${contentLength} "${referrer}" "${userAgent}" \x1b[33m+${responseTime}ms`,
        );
      }
    });

    next();
  }
}
