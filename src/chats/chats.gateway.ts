import {
  ConnectedSocket,
  MessageBody,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { ChatsRepository } from './chats.repository';
import { CreateMessageDto, EnterUserDto } from './chats.dto';

@WebSocketGateway({ namespace: 'chats', transports: ['websocket'] })
export class ChatsGateway implements OnGatewayDisconnect {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    const user = await this.chatsRepository.findUserById(socket.id);

    if (user) {
      const deletedUser = await this.chatsRepository.deleteUser(user.id);

      socket.broadcast.emit('deleteUser', { nickname: deletedUser.nickname });
    }
  }

  @SubscribeMessage('enterUser')
  async enterUser(@MessageBody() { nickname }: EnterUserDto, @ConnectedSocket() socket: Socket) {
    let user = await this.chatsRepository.findUserByNickname(nickname);

    if (!user) {
      user = await this.chatsRepository.createUser(socket.id, nickname);
    }

    socket.broadcast.emit('enterUser', { nickname: user.nickname });

    return { nickname: user.nickname };
  }

  @SubscribeMessage('createMessage')
  async createMessage(
    @MessageBody() { content }: CreateMessageDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const message = await this.chatsRepository.createMessage(socket.id, content);

    if (message.socket) {
      socket.broadcast.emit('createMessage', {
        nickname: message.socket.nickname,
        content: message.content,
      });
    }

    return { content: message.content };
  }
}
