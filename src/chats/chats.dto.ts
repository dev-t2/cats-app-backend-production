import { PickType } from '@nestjs/mapped-types';

import { Socket } from './entities/socket.entity';
import { Message } from './entities/message.entity';

export class EnterUserDto extends PickType(Socket, ['nickname'] as const) {}

export class CreateMessageDto extends PickType(Message, ['content'] as const) {}
