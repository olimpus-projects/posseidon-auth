import { RegisterController } from "controllers/RegisterController"
import { RegisterService } from "services/RegisterSevice"
import { mailprovider, mongosUsersRepository, mongosUsersTokenRepository } from "useCases"


const registerUseCase = new RegisterService(
  mongosUsersRepository,
  mongosUsersTokenRepository,
  //mailprovider
)

const registerController = new RegisterController(
    registerUseCase
)

export { registerController }