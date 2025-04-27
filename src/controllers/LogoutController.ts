import { Request, Response } from "express";
import { LogoutService } from "services/LogoutService";
import { ResponseError } from "utils/error/ResponseError";

export class LogoutController {
    constructor(
        private logoutUseCase: LogoutService
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { _id } = request.body;

        try {

            const del = await this.logoutUseCase.execute({
                _id,
            });
            if (!del) return response.status(400).end();
            return response.status(200).end();
        } catch (error) {
            throw new ResponseError(500, 'Server Error');
        }
    }
}