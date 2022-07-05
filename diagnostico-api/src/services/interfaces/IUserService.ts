import { User } from '../../domain/User';
import ILoginDTO from '../../dtos/ILoginDTO';

export default interface IUserService {
    login: (loginDto: ILoginDTO) => Promise<string>;
    validUser: (email: string) => Promise<Boolean>;
}
