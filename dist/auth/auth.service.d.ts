import { JwtService } from '@nestjs/jwt';
import { CatsRepository } from 'src/cats/cats.repository';
import { SignInDto } from 'src/cats/cats.dto';
export declare class AuthService {
    private readonly catsRepository;
    private readonly jwtService;
    constructor(catsRepository: CatsRepository, jwtService: JwtService);
    signIn({ email, password }: SignInDto): Promise<{
        accessToken: string;
    }>;
}
