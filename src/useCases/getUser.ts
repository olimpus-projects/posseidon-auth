import { UsersRepository } from "../../repositories/UsersRepository";
import { authMiddleware } from "../middleware";
import { getUserController } from "../controllers/getUserController";
import { GetUserUseCase } from "../services/getUserService";

const mongosUsersRepository = new UsersRepository();

const getUserUseCase = new GetUserUseCase(
  mongosUsersRepository,
)

const getuserController = new getUserController(
    getUserUseCase,
    authMiddleware
)

export { getUserUseCase, getuserController }