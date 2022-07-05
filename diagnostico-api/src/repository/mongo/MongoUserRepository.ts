import { Login } from '../../domain/Login';
import IUserRepository from '../interfaces/IUserRepository';
import { User } from '../../persistence/schemas/userSchema';
import IUserPersistence from '../../dataSchema/IUserPersistence';
import { UserMapper } from '../../mappers/UserMapper';

export class MongoUserRepository implements IUserRepository {
    findUser = async (login: Login) => {
        const theUser: IUserPersistence | null = await User.findOne({ email: login.email, password: login.password });

        if (theUser) {
            return UserMapper.toDomain(theUser);
        }
        throw 'User not registered';

        return {} as Login;
    };
}
