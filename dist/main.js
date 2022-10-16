"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma/prisma.service");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.get(prisma_service_1.PrismaService).enableShutdownHooks(app);
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors({ origin: true, credentials: true });
    app.use(['/api', '/api-json'], (0, express_basic_auth_1.default)({
        challenge: true,
        users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats App API')
        .setDescription('Cats App API Document')
        .setVersion('1.0.0')
        .build();
    swagger_1.SwaggerModule.setup('api', app, swagger_1.SwaggerModule.createDocument(app, config));
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map