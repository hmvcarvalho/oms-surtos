import { Login } from '../../domain/Login';
import IUserRepository from '../interfaces/IUserRepository';
import { UserSchemaModel } from '../../persistence/schemas/userSchema';
import IUserPersistence from '../../dataSchema/IUserPersistence';
import { UserMapper } from '../../mappers/UserMapper';
import { User } from '../../domain/User';

export class MongoUserRepository implements IUserRepository {
    findUser = async (login: Login) => {
        const theUser: IUserPersistence | null = await UserSchemaModel.findOne({
            email: login.email,
            password: login.password,
        });

        if (theUser) {
            return UserMapper.toDomain(theUser);
        }
        throw 'User not registered';
    };

    findUserByEmail = async (email: string) => {
        const theUser: IUserPersistence | null = await UserSchemaModel.findOne({
            email: email,
        });

        if (theUser) {
            return UserMapper.toDomain(theUser);
        }
        throw 'User not registered';
    };
}
