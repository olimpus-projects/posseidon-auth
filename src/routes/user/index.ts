import { Router, Request, Response } from "express";
import { AuthMiddleware } from "middleware/AuthMiddleware";
import { ErrorMiddleware } from "middleware/ErrorMiddleware";
import { getuserController } from "useCases/getUser";
import { registerController } from "useCases/register";

export const userRouter = Router();

userRouter.post('/register', ErrorMiddleware, (request: Request, response: Response) => {
  return registerController.handle(request, response);
});

userRouter.get('/getUser', AuthMiddleware, ErrorMiddleware, (request: Request, response: Response) => {
    return getuserController.handle(request, response);
});
