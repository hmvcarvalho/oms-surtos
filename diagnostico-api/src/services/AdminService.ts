import IAdminRepository from '../repository/interfaces/IAdminRepository';
import IAdminService from './interfaces/IAdminService';
import { MongoAdminRepository } from '../repository/mongo/MongoAdminRepository';
import IAdminDTO from '../dtos/IAdminDTO';
import { AdminMapper } from '../mappers/AdminMapper';

class AdminService implements IAdminService {
    constructor(private adminRepository: IAdminRepository = new MongoAdminRepository()) {}

    createAdmin = async (adminDto: IAdminDTO) => {
        const adminPers = await this.adminRepository.save(AdminMapper.toDomain(adminDto));
        return AdminMapper.toDTO(adminPers);
    };

    updateAdmin = async (id: string, adminDto: IAdminDTO) => {
        const adminPers = await this.adminRepository.save(AdminMapper.toDomain({ ...adminDto, funcNum: id }));
        return AdminMapper.toDTO(adminPers);
    };

    getAdmin = async () => {
        const adminListPers = await this.adminRepository.getAll();
        return adminListPers.map((list) => AdminMapper.toDTO(list));
    };

    getAdminById = async (id: string) => {
        const adminPers = await this.adminRepository.getById(id);
        return AdminMapper.toDTO(adminPers);
    };

    deleteAdmin = async (id: string) => {
        return await this.adminRepository.delete(id);
    };
}

export { AdminService };
