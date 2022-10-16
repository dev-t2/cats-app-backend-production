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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const cats_repository_1 = require("../cats/cats.repository");
const comments_repository_1 = require("./comments.repository");
let CommentsService = class CommentsService {
    constructor(catsRepository, commentsRepository) {
        this.catsRepository = catsRepository;
        this.commentsRepository = commentsRepository;
    }
    async createComment(catId, authorId, content) {
        const isCat = await this.catsRepository.findCatById(catId);
        if (!isCat) {
            throw new common_1.BadRequestException();
        }
        return await this.commentsRepository.createComment(catId, authorId, content);
    }
    async findComments() {
        return await this.commentsRepository.findComments();
    }
    async like(commentId, catId) {
        const isComment = await this.commentsRepository.findCommentById(commentId);
        if (!isComment) {
            throw new common_1.BadRequestException();
        }
        const isLike = await this.commentsRepository.findLike(commentId, catId);
        if (isLike) {
            return await this.commentsRepository.unlikeComment(commentId, catId);
        }
        return await this.commentsRepository.likeComment(commentId, catId);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository,
        comments_repository_1.CommentsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map