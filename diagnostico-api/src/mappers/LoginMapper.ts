import { Login } from '../domain/Login';
import ILoginDTO from '../dtos/ILoginDTO';

export class LoginMapper {
    public static toDomain(login: ILoginDTO): Login {
        return {
            email: login.email,
            password: login.password,
        };
    }
}
