import { authMiddleware } from "../middleware";
import { RegisterController } from "./RegisterController";
import { RegisterUseCase } from "../services/RegisterUseCase";

const registerUseCase = new RegisterUseCase(
  mongosUsersRepository,
  mongosUsersTokenRepository,
  mailprovider
)

const registerController = new RegisterController(
    registerUseCase,
    authMiddleware
)

export {registerUseCase, registerController }