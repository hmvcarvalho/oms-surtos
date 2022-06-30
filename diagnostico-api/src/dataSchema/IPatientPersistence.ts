import IUserPersistence from './IUserPersistence';

export default interface IPatientPersistence extends IUserPersistence {
    patientNumber: string;
    doctorNumber: string; // DUVIDA id medicos
}
