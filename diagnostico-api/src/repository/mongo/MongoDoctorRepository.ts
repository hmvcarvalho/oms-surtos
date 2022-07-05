import { Doctor } from '../../domain/Doctor';
import IDoctorRepository from '../interfaces/IDoctorRepository';
import { DoctorSchema } from '../../persistence/schemas/doctorSchema';
import { DoctorMapper } from '../../mappers/DoctorMapper';
import IDoctorPersistence from '../../dataSchema/IDoctorPersistence';
export class MongoDoctorRepository implements IDoctorRepository {
    save = async (doctor: Doctor) => {
        const newDoctor = DoctorMapper.toPersistence(doctor);

        return DoctorMapper.toDomain(
            await DoctorSchema.findOneAndUpdate(
                {
                    doctorNumber: newDoctor.doctorNumber,
                },

                newDoctor,

                {
                    upsert: true,
                    new: true,
                }
            )
        );
    };

    getAll = async () => {
        const docListPers: IDoctorPersistence[] = await DoctorSchema.find();
        return docListPers.map((doc) => DoctorMapper.toDomain(doc));
    };

    getById = async (id: string) => {
        const theDoctorPers: IDoctorPersistence | null = await DoctorSchema.findOne({ doctorNumber: id });
        if (theDoctorPers) return DoctorMapper.toDomain(theDoctorPers);
        throw `Doctor with doctor number : ${id} doesn't exist in DB`;
    };

    delete = async (id: string) => {
        return !!(await DoctorSchema.findOneAndDelete({ doctorNumber: id }));
    };
}
