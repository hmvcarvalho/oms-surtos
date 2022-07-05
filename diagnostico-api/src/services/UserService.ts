import ILoginDTO from '../dtos/ILoginDTO';
import { LoginMapper } from '../mappers/LoginMapper';
import IUserRepository from '../repository/interfaces/IUserRepository';
import { MongoUserRepository } from '../repository/mongo/MongoUserRepository';
import IUserService from './interfaces/IUserService';
import jwt from 'jsonwebtoken';

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository = new MongoUserRepository()) {}

    login = async (loginDto: ILoginDTO) => {
        const userData = await this.userRepository.findUser(LoginMapper.toDomain(loginDto));
        const token = jwt.sign({ email: userData.email }, process.env.TOKEN_SECRET!);
        return token;
    };
}

export { UserService };