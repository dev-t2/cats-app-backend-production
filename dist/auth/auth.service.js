"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = __importDefault(require("bcrypt"));
const cats_repository_1 = require("../cats/cats.repository");
let AuthService = class AuthService {
    constructor(catsRepository, jwtService) {
        this.catsRepository = catsRepository;
        this.jwtService = jwtService;
    }
    async signIn({ email, password }) {
        const cat = await this.catsRepository.findCatByEmail(email);
        if (!cat) {
            throw new common_1.UnauthorizedException('이메일과 비밀번호를 확인해 주세요');
        }
        const isValidatedPassword = await bcrypt_1.default.compare(password, cat.password);
        if (!isValidatedPassword) {
            throw new common_1.UnauthorizedException('이메일과 비밀번호를 확인해 주세요');
        }
        const payload = { id: cat.id, email: cat.email };
        return { accessToken: this.jwtService.sign(payload) };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map