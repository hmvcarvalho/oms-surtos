import IAdminDTO from '../../dtos/IAdminDTO';

export default interface IAdminService {
    createAdmin: (adminDto: IAdminDTO) => Promise<IAdminDTO>;
    getAdmin: () => Promise<IAdminDTO[]>;
    getAdminById: (id: string) => Promise<IAdminDTO>;
    deleteAdmin: (id: string) => Promise<IAdminDTO>;
    updateAdmin: (id: string, IAdminDto: IAdminDTO) => Promise<IAdminDTO>;
}
