export class ResponseError extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}