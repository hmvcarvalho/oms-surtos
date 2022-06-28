import IDoctorDTO from '../dtos/IDoctorDTO';
import { DoctorMapper } from '../mappers/DoctorMapper';
import IDoctorRepository from '../repository/interfaces/IDoctorRepository';
import { MongoDoctorRepository } from '../repository/mongo/MongoDoctorRepository';
import IDoctorService from './interfaces/IDoctorService';

class DoctorService implements IDoctorService {
    constructor(private doctorRepository: IDoctorRepository = new MongoDoctorRepository()) {}

    createDoctor = async (doctorDto: IDoctorDTO) => {
        const doctorPers = await this.doctorRepository.save(DoctorMapper.toDomain(doctorDto));
        return DoctorMapper.toDTO(doctorPers);
    };

    getDoctors = async () => {
        const doctorListPers = await this.doctorRepository.getAll();
        return doctorListPers.map((doc) => DoctorMapper.toDTO(doc));
    };

    getDoctorById = async (id: string) => {
        const theDoctorPers = await this.doctorRepository.getById(id);
        return DoctorMapper.toDTO(theDoctorPers);
    };

    updateDoctor = async (id: string, doctorDto: IDoctorDTO) => {
        const doctorPers = await this.doctorRepository.save(DoctorMapper.toDomain({ ...doctorDto, doctorNumber: id }));
        return DoctorMapper.toDTO(doctorPers);
    };

    deleteDoctor = async (id: string) => {
        return await this.doctorRepository.delete(id);
    };
}

export { DoctorService };
