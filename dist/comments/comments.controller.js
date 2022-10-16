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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comments_service_1 = require("./comments.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const cat_decorator_1 = require("../common/decorators/cat.decorator");
const cats_dto_1 = require("../cats/cats.dto");
const parse_positive_int_pipe_1 = require("../common/pipes/parse-positive-int.pipe");
const comments_dto_1 = require("./comments.dto");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async createComment({ id: authorId }, catId, { content }) {
        return await this.commentsService.createComment(catId, authorId, content);
    }
    async findComments() {
        return await this.commentsService.findComments();
    }
    async increaseLikes({ id: catId }, commentId) {
        return await this.commentsService.like(commentId, catId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '댓글 생성' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':catId'),
    __param(0, (0, cat_decorator_1.Cat)()),
    __param(1, (0, common_1.Param)('catId', parse_positive_int_pipe_1.ParsePositiveIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CatDto, Number, comments_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '댓글 리스트' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findComments", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '좋아요' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':commentId/likes'),
    __param(0, (0, cat_decorator_1.Cat)()),
    __param(1, (0, common_1.Param)('commentId', parse_positive_int_pipe_1.ParsePositiveIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CatDto, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "increaseLikes", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map