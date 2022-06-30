import IPatientDTO from '../dtos/IPatientDTO';
import IPatientService from './interfaces/IPatientService';

class PatientService implements IPatientService {
    constructor() {}
    createPatient = async (patientDTO: IPatientDTO) => {
        return {} as IPatientDTO;
    };

    readPatients = async () => {
        return [];
    };

    readPatientByID = async (patientNumber: string) => {
        return {} as IPatientDTO;
    };

    updatePatient = async (patientDTO: IPatientDTO) => {
        return {} as IPatientDTO;
    };

    deletePatient = async (patientDTO: IPatientDTO) => {
        return {} as IPatientDTO;
    };
}

export { PatientService };
