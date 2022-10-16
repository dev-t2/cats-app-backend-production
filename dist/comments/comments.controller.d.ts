import { CommentsService } from './comments.service';
import { CatDto } from 'src/cats/cats.dto';
import { CreateCommentDto } from './comments.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment({ id: authorId }: CatDto, catId: number, { content }: CreateCommentDto): Promise<import(".prisma/client").Comment>;
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
    increaseLikes({ id: catId }: CatDto, commentId: number): Promise<import(".prisma/client").Like>;
}
