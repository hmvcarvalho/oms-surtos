import IAdminRepository from '../interfaces/IAdminRepository';
import { AdminMapper } from '../../mappers/AdminMapper';
import { AdminSchema } from '../../persistence/schemas/adminSchema';
import { Admin } from '../../domain/Admin';
import IAdminPersistence from '../../dataSchema/IAdminPersistence';

export class MongoAdminRepository implements IAdminRepository {
    save = async (admin: Admin) => {
        const newAdmin = AdminMapper.toPersistence(admin);

        return AdminMapper.toDomain(
            await AdminSchema.findOneAndUpdate(
                {
                    funcNum: newAdmin.funcNum,
                },
                newAdmin,
                {
                    upsert: true,
                    new: true,
                }
            )
        );
    };

    getAll = async () => {
        const adminListPers: IAdminPersistence[] = await AdminSchema.find();
        return adminListPers.map((list) => AdminMapper.toDomain(list));
    };

    getById = async (id: string) => {
        const adminPers: IAdminPersistence | null = await AdminSchema.findOne({ funcNum: id });
        if (adminPers) return AdminMapper.toDomain(adminPers);
        throw `Admin with functionary number : ${id} doesn't exist in DB`;
    };

    delete = async (id: string) => {
        return !!(await AdminSchema.findOneAndDelete({ funcNum: id }));
    };
}
