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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CatsRepository = class CatsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findCatByEmail(email) {
        return await this.prismaService.cat.findUnique({
            where: { email },
            select: { id: true, email: true, password: true },
        });
    }
    async findCatByNickname(nickname) {
        return await this.prismaService.cat.findUnique({
            where: { nickname },
            select: { id: true },
        });
    }
    async signUp(email, nickname, password) {
        await this.prismaService.cat.create({
            data: { email, nickname, password },
            select: { id: true },
        });
    }
    async findCatById(id) {
        return await this.prismaService.cat.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                nickname: true,
                avatar: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findCats(id) {
        return await this.prismaService.cat.findMany({
            where: { id: { not: id } },
            select: {
                id: true,
                email: true,
                nickname: true,
                avatar: true,
                createdAt: true,
                updatedAt: true,
                cats: {
                    select: {
                        id: true,
                        author: { select: { id: true, email: true, nickname: true, avatar: true } },
                        content: true,
                        _count: { select: { likes: true } },
                    },
                },
                authors: {
                    select: {
                        id: true,
                        cat: { select: { id: true, email: true, nickname: true, avatar: true } },
                        content: true,
                        _count: { select: { likes: true } },
                    },
                },
            },
        });
    }
    async findCat(id) {
        return await this.prismaService.cat.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                nickname: true,
                avatar: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async updateAvatar(id, url) {
        return await this.prismaService.cat.update({
            where: { id },
            data: { avatar: url },
            select: { avatar: true },
        });
    }
};
CatsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatsRepository);
exports.CatsRepository = CatsRepository;
//# sourceMappingURL=cats.repository.js.map