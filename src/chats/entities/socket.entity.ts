import { Socket as SocketModel } from '@prisma/client';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class Socket implements SocketModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
