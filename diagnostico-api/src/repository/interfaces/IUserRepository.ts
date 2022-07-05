import { Login } from '../../domain/Login';
export default interface IUserRepository {
    findUser: (login: Login) => Promise<Login>;
}
