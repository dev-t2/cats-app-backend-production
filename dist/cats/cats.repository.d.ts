import { PrismaService } from 'src/prisma/prisma.service';
export declare class CatsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findCatByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    findCatByNickname(nickname: string): Promise<{
        id: number;
    }>;
    signUp(email: string, nickname: string, password: string): Promise<void>;
    findCatById(id: number): Promise<{
        id: number;
        email: string;
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findCats(id: number): Promise<{
        id: number;
        email: string;
        cats: {
            id: number;
            _count: {
                likes: number;
            };
            author: {
                id: number;
                email: string;
                nickname: string;
                avatar: string;
            };
            content: string;
        }[];
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
        authors: {
            id: number;
            _count: {
                likes: number;
            };
            content: string;
            cat: {
                id: number;
                email: string;
                nickname: string;
                avatar: string;
            };
        }[];
    }[]>;
    findCat(id: number): Promise<{
        id: number;
        email: string;
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAvatar(id: number, url: string): Promise<{
        avatar: string;
    }>;
}
