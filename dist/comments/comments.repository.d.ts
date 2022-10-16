import { PrismaService } from 'src/prisma/prisma.service';
export declare class CommentsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createComment(catId: number, authorId: number, content: string): Promise<import(".prisma/client").Comment>;
    findComments(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
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
        cat: {
            id: number;
            email: string;
            nickname: string;
            avatar: string;
        };
    }[]>;
    findCommentById(id: number): Promise<import(".prisma/client").Comment>;
    findLike(commentId: number, catId: number): Promise<import(".prisma/client").Like>;
    likeComment(commentId: number, catId: number): Promise<import(".prisma/client").Like>;
    unlikeComment(commentId: number, catId: number): Promise<import(".prisma/client").Like>;
}
