import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger('Chats');

  constructor() {
    this.logger.log('Constructor');
  }

  afterInit() {
    this.logger.log('After Init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Connected ${socket.nsp.name}: ${socket.id}`);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Disconnected ${socket.nsp.name}: ${socket.id}`);
  }

  @SubscribeMessage('createUser')
  createUser(@MessageBody('nickname') nickname: string, @ConnectedSocket() socket: Socket) {
    console.log(socket.id);

    return nickname;
  }
}
