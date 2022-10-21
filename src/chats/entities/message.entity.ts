import { Message as MessageModel } from '@prisma/client';
import { IsDate, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class Message implements MessageModel {
  @IsPositive()
  id: number;

  @IsString()
  socketId: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
