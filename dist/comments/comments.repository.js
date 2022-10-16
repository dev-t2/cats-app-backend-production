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
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentsRepository = class CommentsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createComment(catId, authorId, content) {
        return await this.prismaService.comment.create({
            data: { catId, authorId, content },
        });
    }
    async findComments() {
        return await this.prismaService.comment.findMany({
            select: {
                id: true,
                cat: { select: { id: true, email: true, nickname: true, avatar: true } },
                author: { select: { id: true, email: true, nickname: true, avatar: true } },
                content: true,
                _count: { select: { likes: true } },
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findCommentById(id) {
        return await this.prismaService.comment.findUnique({
            where: { id },
        });
    }
    async findLike(commentId, catId) {
        return await this.prismaService.like.findUnique({
            where: { commentId_catId: { commentId, catId } },
        });
    }
    async likeComment(commentId, catId) {
        return await this.prismaService.like.create({
            data: { commentId, catId },
        });
    }
    async unlikeComment(commentId, catId) {
        return await this.prismaService.like.delete({
            where: { commentId_catId: { commentId, catId } },
        });
    }
};
CommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map