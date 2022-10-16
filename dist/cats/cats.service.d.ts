import { CatsRepository } from './cats.repository';
import { AwsService } from 'src/aws/aws.service';
import { CatDto, FilesDto, SignUpDto } from './cats.dto';
export declare class CatsService {
    private readonly catsRepository;
    private readonly awsService;
    constructor(catsRepository: CatsRepository, awsService: AwsService);
    signUp({ email, nickname, password }: SignUpDto): Promise<void>;
    findCats({ id }: CatDto): Promise<{
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
    profile({ id }: CatDto): Promise<{
        id: number;
        email: string;
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAvatar({ id }: CatDto, filesDto: FilesDto): Promise<{
        avatar: string;
    }>;
}
