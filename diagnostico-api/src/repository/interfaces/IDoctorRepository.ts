import { Doctor } from '../../domain/Doctor';
import IUserRepository from './IUserRepository';

export default interface IDoctorRepository extends IUserRepository {
    create: (doctor: Doctor) => Promise<Doctor>;
    // getAll: () => Promise<Doctor[]>;
    // getById: (id: string) => Promise<Doctor>;
    // update: (doctor: Doctor) => Promise<Doctor>;
    // delete: (doctor: Doctor) => Promise<Doctor>;
}
