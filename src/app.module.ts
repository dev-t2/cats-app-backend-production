import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ChatsModule } from './chats/chats.module';
import { AppController } from './app.controller';
import { HttpLoggerMiddleware } from './common/middlewares/http-logger.middleware';

@Module({
  imports: [ChatsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
