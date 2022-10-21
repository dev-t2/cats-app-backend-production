import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { ChatsGateway } from './chats.gateway';
import { ChatsRepository } from './chats.repository';

@Module({
  imports: [PrismaModule],
  providers: [ChatsGateway, ChatsRepository],
})
export class ChatsModule {}
