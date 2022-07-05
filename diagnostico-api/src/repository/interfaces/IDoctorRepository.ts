import { Doctor } from '../../domain/Doctor';
import IUserRepository from './IUserRepository';

export default interface IDoctorRepository extends IUserRepository {
    save: (doctor: Doctor) => Promise<Doctor>;
    getAll: () => Promise<Doctor[]>;
    getById: (id: string) => Promise<Doctor>;
    delete: (id: string) => Promise<boolean>;
}
