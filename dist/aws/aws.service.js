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
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let AwsService = class AwsService {
    constructor() {
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            region: process.env.S3_REGION,
        });
    }
    async updateAvatar(id, { fieldname, buffer, mimetype }) {
        await this.s3
            .putObject({
            Bucket: process.env.S3_BUCKET,
            Key: `users/${id}/${fieldname}`,
            Body: buffer,
            ContentType: mimetype,
        })
            .promise();
        const url = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/users/${id}/${fieldname}`;
        return url;
    }
    async deleteAvatar(id) {
        await this.s3
            .deleteObject({ Bucket: process.env.S3_BUCKET, Key: `users/${id}/avatar` })
            .promise();
    }
};
AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map