import { authMiddleware } from "../middleware";
import { LogoutController } from "./LogoutController";
import { LogoutUseCase } from "../services/LogoutUseCase";

const logoutUseCase = new LogoutUseCase(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const logoutController = new LogoutController(
    logoutUseCase,
    authMiddleware
)

export { logoutUseCase, logoutController }