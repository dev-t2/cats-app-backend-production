import { CatsService } from './cats.service';
import { AuthService } from 'src/auth/auth.service';
import { CatDto, FilesDto, SignInDto, SignUpDto } from './cats.dto';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
    signOut(): void;
    findCats(catDto: CatDto): Promise<{
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
    profile(catDto: CatDto): Promise<{
        id: number;
        email: string;
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    uploadAvatar(catDto: CatDto, filesDto: FilesDto): Promise<{
        avatar: string;
    }>;
}
