/// <reference types="multer" />
export declare class AwsService {
    private readonly s3;
    constructor();
    updateAvatar(id: number, { fieldname, buffer, mimetype }: Express.Multer.File): Promise<string>;
    deleteAvatar(id: number): Promise<void>;
}
