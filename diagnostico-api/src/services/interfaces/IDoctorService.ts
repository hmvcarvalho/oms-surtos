import IDoctorDTO from '../../dtos/IDoctorDTO';

export default interface IDoctorService {
    createDoctor: (doctorDto: IDoctorDTO) => Promise<IDoctorDTO>;
    // getDoctor: (doctorDto: IDoctorDTO) => Promise<IDoctorDTO[]>;
    // getDoctorById: (doctorDto: IDoctorDTO) => Promise<IDoctorDTO>;
    // updateDoctor: (doctorDto: IDoctorDTO) => Promise<IDoctorDTO>;
}
