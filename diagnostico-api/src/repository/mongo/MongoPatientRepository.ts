import { Patient } from '../../domain/Patient';
import IPatientRepository from '../interfaces/IPatientRepository';
import { patientSchema } from '../../persistence/schemas/patientSchema';
import { PatientMapper } from '../../mappers/PatientMapper';

export class MongoPatientRepository implements IPatientRepository {
    constructor(private patientModel = patientSchema) {}

    create = async (patient: Patient): Promise<Patient> => {
        return {} as Patient;
    };

    // read

    // update

    // delete
}
