import IUserDTO from './IUserDTO';

export default interface IAdminDTO extends IUserDTO {
    funcNum: string;
    department: string;
}
