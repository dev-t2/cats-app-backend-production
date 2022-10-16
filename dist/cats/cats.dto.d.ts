/// <reference types="multer" />
import { Cat } from './entities/cat.entity';
declare const SignUpDto_base: import("@nestjs/common").Type<Pick<Cat, "email" | "password" | "nickname">>;
export declare class SignUpDto extends SignUpDto_base {
}
declare const SignInDto_base: import("@nestjs/common").Type<Pick<Cat, "email" | "password">>;
export declare class SignInDto extends SignInDto_base {
}
declare const CatDto_base: import("@nestjs/common").Type<Omit<Cat, "password">>;
export declare class CatDto extends CatDto_base {
}
export declare class FilesDto extends Array<Express.Multer.File> {
}
export {};
