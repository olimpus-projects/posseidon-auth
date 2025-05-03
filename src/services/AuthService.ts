import { IUsersTokenRepository } from "@repositories/interfaces/IUsersTokenReposytory";
import { AuthRequestDTO } from "./DTO/AuthDTO";
import { JWTservice } from "@providers/services";
import { ResponseError } from "@src/utils/error/ResponseError";

export class AuthService {
    constructor(
        private userTokenRepository: IUsersTokenRepository,
    ) {}
    async execute(
        data: AuthRequestDTO
    ) {
        if (data.token) {
            const userToken = await this.userTokenRepository.getUserToken(data.token);
            if (!userToken) {
                throw new ResponseError(401, 'Token not found');
            }
            // verifyng if the token is not valid
            if (JWTservice.JWTVerifier(userToken.token)) {
                const newToken = JWTservice.sign({ uid: userToken.userId });
                await this.userTokenRepository.updateToken(userToken.userId, newToken);
                return newToken;
            }
            return userToken.token;
        }
    }
}