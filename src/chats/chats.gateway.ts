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

@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(ChatsGateway.name);

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Connected ${socket.nsp.name} ${socket.id}`);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Disconnected ${socket.nsp.name} ${socket.id}`);
  }

  @SubscribeMessage('createUser')
  createUser(@MessageBody('nickname') nickname: string, @ConnectedSocket() socket: Socket) {
    socket.broadcast.emit('createUser', nickname);

    return nickname;
  }
}
