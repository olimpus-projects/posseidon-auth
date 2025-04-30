import { ResponseError } from "@utils/error/ResponseError";
import { UserToken } from "@entities/UserToken";
import { JWTservice } from "@providers/services";
import PasswordEncryptor from "@providers/services/PasswordEncryptor";
import { IUsersRepository } from "@repositories/interfaces/IUsersRepository";
import { IUsersTokenRepository } from "@repositories/interfaces/IUsersTokenReposytory";
import { LoginRequestDTO } from "./DTO/LoginDTO";

export class LoginService {
    constructor(
        private usersRepository: IUsersRepository,
        private usersTokenRepository: IUsersTokenRepository,
    ) {}
    async execute(
        data: LoginRequestDTO
    ) {
            const user = await this.usersRepository.findByEmail(data.email);
            if (!user) {
                throw new ResponseError(401, 'User not found');
            }
            const mathPass = await PasswordEncryptor.comparePasswords(data.password, user.password);
            if (mathPass) {
                const userTokenAlreadExists = await this.usersTokenRepository.TokenExist(user._id);
                if (userTokenAlreadExists != undefined) {
                    if (JWTservice.JWTVerifier(userTokenAlreadExists.token)) {
                        userTokenAlreadExists.token = JWTservice.sign({ uid: userTokenAlreadExists.userId });
                        await this.usersTokenRepository.updateToken(user._id, userTokenAlreadExists.token);
                        return userTokenAlreadExists;
                    }
                    return userTokenAlreadExists;
                }
                const token = JWTservice.sign({ uid: user._id });
                await this.usersTokenRepository.create(new UserToken({ userId: user._id , token }));
                return new UserToken({ userId: user._id, token });
            }
            throw new ResponseError(401, 'Password not match');
    }
}