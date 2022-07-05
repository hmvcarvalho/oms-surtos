import { Login } from '../../domain/Login';
import { User } from '../../domain/User';
export default interface IUserRepository {
    findUser: (login: Login) => Promise<Login>;
    findUserByEmail: (email: string) => Promise<User>;
}
