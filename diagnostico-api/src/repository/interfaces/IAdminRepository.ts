import { Admin } from '../../domain/Admin';
import IAdminDTO from '../../dtos/IAdminDTO';
import IUserRepository from './IUserRepository';

export default interface IAdminRepository extends IUserRepository {
    save: (admin: Admin) => Promise<Admin>;
    getAll: () => Promise<Admin[]>;
    getById: (id: string) => Promise<Admin>;
    delete: (id: string) => Promise<boolean>;
}
