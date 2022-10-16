import { CatsRepository } from 'src/cats/cats.repository';
import { CommentsRepository } from './comments.repository';
export declare class CommentsService {
    private readonly catsRepository;
    private readonly commentsRepository;
    constructor(catsRepository: CatsRepository, commentsRepository: CommentsRepository);
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
    like(commentId: number, catId: number): Promise<import(".prisma/client").Like>;
}
