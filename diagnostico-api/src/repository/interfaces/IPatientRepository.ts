import { Patient } from '../../domain/Patient';
import IUserRepository from './IUserRepository';

export default interface IPatientRepository extends IUserRepository {
    create: (patient: Patient) => Promise<Patient>;
    // getAll: () => Promise<Patient[]>;
    // getById: (id: string) => Promise<Patient>;
    // update: (patient: Patient) => Promise<Patient>;
    // delete: (patient: Patient) => Promise<Patient>;
}
