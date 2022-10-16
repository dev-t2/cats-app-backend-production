import { Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cats.repository';
import { IPayload } from '../auth.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    validate({ id, email }: IPayload): Promise<{
        id: number;
        email: string;
        nickname: string;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
