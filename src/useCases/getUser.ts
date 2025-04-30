
import { GetUserService } from "@services/getUserService";
import { getUserController } from "@controllers/getUserController";
import { mongosUsersRepository } from ".";

const getUserUseCase = new GetUserService(
  mongosUsersRepository,
)

const getuserController = new getUserController(
    getUserUseCase
)

export { getuserController };