import { Comment as CommentModel } from '@prisma/client';
export declare class Comment implements CommentModel {
    id: number;
    catId: number;
    authorId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
