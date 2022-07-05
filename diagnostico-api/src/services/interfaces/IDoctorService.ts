import IDoctorDTO from '../../dtos/IDoctorDTO';

export default interface IDoctorService {
    createDoctor: (doctorDto: IDoctorDTO) => Promise<IDoctorDTO>;
    getDoctors: () => Promise<IDoctorDTO[]>;
    getDoctorById: (id: string) => Promise<IDoctorDTO>;
    updateDoctor: (id: string, doctorDto: IDoctorDTO) => Promise<IDoctorDTO>;
    deleteDoctor: (id: string) => Promise<boolean>;
}
