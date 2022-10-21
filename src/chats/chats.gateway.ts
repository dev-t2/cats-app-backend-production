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

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('deleteUser', { nickname: socket.id });
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
  createMessage(@MessageBody() { content }: CreateMessageDto, @ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('createMessage', { nickname: socket.id, content });

    return { content };
  }
}
