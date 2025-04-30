import { LoginService } from "@services/LoginService"
import { mongosUsersRepository, mongosUsersTokenRepository } from "."
import { LoginController } from "@controllers/LoginController"


const loginUseCase = new LoginService(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const loginController = new LoginController(
    loginUseCase
)

export { loginController }