import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUserByNickname(nickname: string) {
    return await this.prismaService.socket.findUnique({
      where: { nickname },
    });
  }

  async createUser(id: string, nickname: string) {
    return await this.prismaService.socket.create({
      data: { id, nickname },
    });
  }
}
