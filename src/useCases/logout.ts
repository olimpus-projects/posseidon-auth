import { LogoutController } from "controllers/LogoutController"
import { LogoutService } from "services/LogoutService"
import { mongosUsersRepository, mongosUsersTokenRepository } from "useCases"


const logoutUseCase = new LogoutService(
  mongosUsersRepository,
  mongosUsersTokenRepository
)

const logoutController = new LogoutController(
    logoutUseCase
)

export { logoutController }