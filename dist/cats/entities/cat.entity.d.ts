import { Cat as CatModel } from '@prisma/client';
export declare class Cat implements CatModel {
    id: number;
    email: string;
    nickname: string;
    password: string;
    avatar: string | null;
    createdAt: Date;
    updatedAt: Date;
}
