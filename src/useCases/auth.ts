import { UsersTokenRepository } from "repositories/UsersTokenRepository";
import { AuthService } from "services/AuthService";

const mongosUsersTokenRepository = new UsersTokenRepository();

const authUseCase = new AuthService(
  mongosUsersTokenRepository
);

export { authUseCase }