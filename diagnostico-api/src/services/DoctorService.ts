import IDoctorDTO from '../dtos/IDoctorDTO';
import IDoctorService from './interfaces/IDoctorService';

class DoctorService implements IDoctorService {
    constructor() {}

    createDoctor = async (doctorDto: IDoctorDTO) => {
        return {} as IDoctorDTO;
    };
}

export { DoctorService };
