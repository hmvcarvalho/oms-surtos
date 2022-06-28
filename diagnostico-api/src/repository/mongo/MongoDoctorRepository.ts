import { Doctor } from '../../domain/Doctor';
import IDoctorRepository from '../interfaces/IDoctorRepository';
import { DoctorSchema } from '../../persistence/schemas/doctorSchema';
import { DoctorMapper } from '../../mappers/DoctorMapper';
export class MongoDoctorRepository implements IDoctorRepository {
    create = async (doctor: Doctor): Promise<Doctor> => {
        const newDoctor = await DoctorSchema.create(DoctorMapper.toPersistence(doctor));
        return DoctorMapper.toDomain(newDoctor);
    };
}
