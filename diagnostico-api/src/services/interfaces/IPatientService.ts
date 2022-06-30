import IPatientDTO from '../../dtos/IPatientDTO';

export default interface IPatientService {
    createPatient: (patientDTO: IPatientDTO) => Promise<IPatientDTO>;
    readPatients: () => Promise<IPatientDTO[]>;
    readPatientByID: (patientNumber: string) => Promise<IPatientDTO>; // DUVIDA
    // updatePatient
}
