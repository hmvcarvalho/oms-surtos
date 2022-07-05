import IAdminPersistence from '../dataSchema/IAdminPersistence';

import { Admin } from '../domain/Admin';

import IAdminDTO from '../dtos/IAdminDTO';
import { UserMapper } from './UserMapper';

export class AdminMapper extends UserMapper {
    public static toDTO(admin: Admin): IAdminDTO {
        const user = this.toUserDTO(admin);
        return {
            ...user,
            funcNum: admin.funcNum,
            department: admin.department,
        };
    }

    public static toPersistence(admin: Admin): IAdminPersistence {
        const user = this.toUserPersistence(admin);
        return {
            ...user,
            funcNum: admin.funcNum,
            department: admin.department,
        };
    }

    public static toDomain(admin: IAdminDTO | IAdminPersistence): Admin {
        return Admin.createAdmin(admin);
    }
}
