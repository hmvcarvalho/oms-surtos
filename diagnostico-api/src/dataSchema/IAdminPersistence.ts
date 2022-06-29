import IUserPersistence from './IUserPersistence';

export default interface IAdminPersistence extends IUserPersistence {
    funcNum: string;
    department: string;
}
