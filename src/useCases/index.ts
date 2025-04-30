import { ResendMailProvider } from "@providers/ResendMail/MailProvider";
import { UsersRepository } from "@repositories/UsersRepository";
import { UsersTokenRepository } from "@repositories/UsersTokenRepository";


export const mongosUsersRepository = new UsersRepository();
export const mongosUsersTokenRepository = new UsersTokenRepository();
export const mailprovider = new ResendMailProvider();