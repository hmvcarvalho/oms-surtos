import { Doctor } from '../../domain/Doctor';
import IDoctorRepository from '../interfaces/IDoctorRepository';

export class MongoDoctorRepository implements IDoctorRepository {
    create = async (doctor: Doctor): Promise<Doctor> => {
        return {} as Doctor;
    };
}
