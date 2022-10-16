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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const cats_repository_1 = require("./cats.repository");
const aws_service_1 = require("../aws/aws.service");
let CatsService = class CatsService {
    constructor(catsRepository, awsService) {
        this.catsRepository = catsRepository;
        this.awsService = awsService;
    }
    async signUp({ email, nickname, password }) {
        const isEmail = await this.catsRepository.findCatByEmail(email);
        if (isEmail) {
            throw new common_1.BadRequestException('이미 사용 중인 이메일입니다');
        }
        const isNickname = await this.catsRepository.findCatByNickname(nickname);
        if (isNickname) {
            throw new common_1.BadRequestException('이미 사용 중인 닉네임입니다');
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        return await this.catsRepository.signUp(email, nickname, hashedPassword);
    }
    async findCats({ id }) {
        return await this.catsRepository.findCats(id);
    }
    async profile({ id }) {
        return await this.catsRepository.findCat(id);
    }
    async updateAvatar({ id }, filesDto) {
        if (filesDto.length === 0) {
            await this.awsService.deleteAvatar(id);
            return await this.catsRepository.updateAvatar(id, '');
        }
        const url = await this.awsService.updateAvatar(id, filesDto[0]);
        return await this.catsRepository.updateAvatar(id, url);
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository,
        aws_service_1.AwsService])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map