import IUserPersistence from './IUserPersistence';

export default interface IDoctorPersistence extends IUserPersistence {
    doctorNumber: string;
}
