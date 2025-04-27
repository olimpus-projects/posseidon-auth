import { LoginController } from "controllers/LoginController"
import { LoginService } from "services/LoginService"
import { mongosUsersRepository, mongosUsersTokenRepository } from "useCases"

const loginUseCase = new LoginService(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const loginController = new LoginController(
    loginUseCase
)

export { loginController }