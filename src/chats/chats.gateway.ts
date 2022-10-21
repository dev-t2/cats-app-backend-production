import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { CreateMessageDto, CreateUserDto } from './chats.dto';

@WebSocketGateway({ namespace: 'chats', transports: ['websocket'] })
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(ChatsGateway.name);

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Connected ${socket.nsp.name} ${socket.id}`);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('deleteUser', { nickname: socket.id });
  }

  @SubscribeMessage('createUser')
  createUser(@MessageBody() { nickname }: CreateUserDto, @ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('createUser', { nickname });

    return { nickname };
  }

  @SubscribeMessage('createMessage')
  createMessage(@MessageBody() { content }: CreateMessageDto, @ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('createMessage', { nickname: socket.id, content });

    return { content };
  }
}
