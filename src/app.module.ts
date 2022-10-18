import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
