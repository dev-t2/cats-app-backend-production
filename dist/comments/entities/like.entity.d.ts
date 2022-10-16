import { Like as LikeModel } from '@prisma/client';
export declare class Like implements LikeModel {
    id: number;
    commentId: number;
    catId: number;
    createdAt: Date;
    updatedAt: Date;
}
