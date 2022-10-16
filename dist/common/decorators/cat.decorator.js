"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const common_1 = require("@nestjs/common");
exports.Cat = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=cat.decorator.js.map