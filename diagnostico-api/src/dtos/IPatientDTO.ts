import IUserDTO from './IUserDTO';

export default interface IPatientDTO extends IUserDTO {
    patientNumber: string;
    doctorNumber: string; // DUVIDA id medicos
}
