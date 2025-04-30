import { LogoutService } from "@services/LogoutService"
import { mongosUsersRepository, mongosUsersTokenRepository } from "."
import { LogoutController } from "@controllers/LogoutController"



const logoutUseCase = new LogoutService(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const logoutController = new LogoutController(
    logoutUseCase
)

export { logoutController }