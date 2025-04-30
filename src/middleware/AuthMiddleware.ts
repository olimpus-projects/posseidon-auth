import { NextFunction, Request, Response } from 'express';
import { authUseCase } from '@useCases/auth';

export const AuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;
    const headerToken = token ? token.replace('Bearer ', '') : null;

    try {
        if (typeof headerToken === 'string' && headerToken !== null) {
            const usertoken = await authUseCase.execute({
                token: headerToken,
            });
            if (!usertoken) {
                return res.status(401).send('Unauthorized');
            }
            return next();
        }
        return res.status(401).send('Token not provided');
    } catch (error) {
        return res.status(401).send('Unauthorized');
    }
};
