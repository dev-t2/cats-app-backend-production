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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const cats_service_1 = require("./cats.service");
const auth_service_1 = require("../auth/auth.service");
const cats_dto_1 = require("./cats.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const cat_decorator_1 = require("../common/decorators/cat.decorator");
let CatsController = class CatsController {
    constructor(catsService, authService) {
        this.catsService = catsService;
        this.authService = authService;
    }
    async signUp(signUpDto) {
        return await this.catsService.signUp(signUpDto);
    }
    async signIn(signInDto) {
        return await this.authService.signIn(signInDto);
    }
    signOut() {
        return;
    }
    async findCats(catDto) {
        return await this.catsService.findCats(catDto);
    }
    async profile(catDto) {
        return await this.catsService.profile(catDto);
    }
    async uploadAvatar(catDto, filesDto) {
        return await this.catsService.updateAvatar(catDto, filesDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '로그아웃' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('signout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "signOut", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '고양이 리스트' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, cat_decorator_1.Cat)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findCats", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '프로필' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, cat_decorator_1.Cat)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아바타 업로드' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('avatar', 1)),
    __param(0, (0, cat_decorator_1.Cat)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CatDto, cats_dto_1.FilesDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "uploadAvatar", null);
CatsController = __decorate([
    (0, swagger_1.ApiTags)('CAT'),
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        auth_service_1.AuthService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map