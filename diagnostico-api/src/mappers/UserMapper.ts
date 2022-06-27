import { User } from '../domain/User';
import IUserDTO from '../dtos/IUserDTO';
import IUserPersistence from '../dataSchema/IUserPersistence';
export abstract class UserMapper {
    public static toUserDTO(user: User): IUserDTO {
        return {
            username: user.username,
            password: user.password,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            dateOfBirth: user.dateOfBirth,
        };
    }

    public static toUserPersistence(user: User): IUserPersistence {
        return {
            username: user.username,
            password: user.password,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            dateOfBirth: user.dateOfBirth,
        };
    }
}
