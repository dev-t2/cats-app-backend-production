import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatsGateway {
  @SubscribeMessage('createUser')
  createUser(@MessageBody('nickname') nickname: string, @ConnectedSocket() socket: Socket) {
    console.log(socket);

    return nickname;
  }
}
