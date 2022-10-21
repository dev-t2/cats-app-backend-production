import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUserByNickname(nickname: string) {
    return await this.prismaService.socket.findUnique({
      where: { nickname },
      select: { nickname: true },
    });
  }

  async createUser(id: string, nickname: string) {
    return await this.prismaService.socket.create({
      data: { id, nickname },
      select: { nickname: true },
    });
  }

  async findUserById(id: string) {
    return await this.prismaService.socket.findUnique({
      where: { id },
      select: { id: true },
    });
  }

  async deleteUser(id: string) {
    return await this.prismaService.socket.delete({
      where: { id },
      select: { nickname: true },
    });
  }

  async createMessage(socketId: string, content: string) {
    return await this.prismaService.message.create({
      data: { socketId, content },
      select: { socket: { select: { nickname: true } }, content: true },
    });
  }
}
