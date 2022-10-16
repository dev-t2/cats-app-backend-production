"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesDto = exports.CatDto = exports.SignInDto = exports.SignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const cat_entity_1 = require("./entities/cat.entity");
class SignUpDto extends (0, swagger_1.PickType)(cat_entity_1.Cat, ['email', 'nickname', 'password']) {
}
exports.SignUpDto = SignUpDto;
class SignInDto extends (0, swagger_1.PickType)(cat_entity_1.Cat, ['email', 'password']) {
}
exports.SignInDto = SignInDto;
class CatDto extends (0, swagger_1.OmitType)(cat_entity_1.Cat, ['password']) {
}
exports.CatDto = CatDto;
class FilesDto extends Array {
}
exports.FilesDto = FilesDto;
//# sourceMappingURL=cats.dto.js.map