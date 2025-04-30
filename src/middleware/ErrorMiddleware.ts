import { Request, Response, NextFunction } from "express";
import { ResponseError } from "@utils/error/ResponseError";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ResponseError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    console.error(err.stack);
    return res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
}