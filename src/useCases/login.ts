import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const loginUseCase = new LoginUseCase(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const loginController = new LoginController(
    loginUseCase
)

export { loginUseCase, loginController }