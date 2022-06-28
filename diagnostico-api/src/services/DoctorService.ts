import IDoctorDTO from '../dtos/IDoctorDTO';
import { DoctorMapper } from '../mappers/DoctorMapper';
import IDoctorRepository from '../repository/interfaces/IDoctorRepository';
import { MongoDoctorRepository } from '../repository/mongo/MongoDoctorRepository';
import IDoctorService from './interfaces/IDoctorService';

class DoctorService implements IDoctorService {
    constructor(private doctorRepository: IDoctorRepository = new MongoDoctorRepository()) {}

    createDoctor = async (doctorDto: IDoctorDTO) => {
        const doctorPers = await this.doctorRepository.create(DoctorMapper.toDomain(doctorDto));
        return DoctorMapper.toDTO(doctorPers);
    };
}

export { DoctorService };
