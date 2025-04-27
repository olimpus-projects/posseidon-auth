import { Request, Response } from "express";
import { RegisterService } from "services/RegisterSevice";

export class RegisterController {
    constructor(
        private registerUseCase: RegisterService,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
                const token = await this.registerUseCase.execute({
                    name,
                    email,
                    password
                });
                if (token) return response.status(200).header("Authorization", "Bearer " + token).json({ token }).send();
                return response.status(400).end();
           //  return response.status(401).end();
        }
        catch {
            return response.status(400).json({
                message: 'Unexpected error'
            })
        }
    }
}
