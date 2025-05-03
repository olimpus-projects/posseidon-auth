import { Request, Response, Router } from "express";
import { AuthMiddleware } from "@middleware/AuthMiddleware";
import { ErrorMiddleware } from "@middleware/ErrorMiddleware";
import { loginController } from "@useCases/login";
import { logoutController } from "@useCases/logout";


export const uTokenRouter = Router();

uTokenRouter.post('/login', ErrorMiddleware, (request: Request, response: Response) => {
  return loginController.handle(request, response);
});

uTokenRouter.post('/logout', ErrorMiddleware, (request: Request, response: Response) => {
  AuthMiddleware
  return logoutController.handle(request, response);
});
