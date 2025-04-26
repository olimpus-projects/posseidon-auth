import { authUseCase } from "../useCases/auth";
import { AuthMiddleware } from "./AuthMiddleware";

const authMiddleware = new AuthMiddleware(
    authUseCase
)

export { authMiddleware }