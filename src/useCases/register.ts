import { RegisterController } from "@controllers/RegisterController"
import { RegisterService } from "@services/RegisterSevice"
import { mongosUsersRepository, mongosUsersTokenRepository } from "."



const registerUseCase = new RegisterService(
  mongosUsersRepository,
  mongosUsersTokenRepository,
  //mailprovider
)

const registerController = new RegisterController(
    registerUseCase
)

export { registerController }