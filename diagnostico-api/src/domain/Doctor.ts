import IDoctorDTO from '../dtos/IDoctorDTO';
import { User } from './User';

export class Doctor extends User {
    public doctorNumber: string;

    constructor(doctor: IDoctorDTO) {
        super(doctor);
        if (doctor.doctorNumber) {
            this.doctorNumber = doctor.doctorNumber;
        } else {
            throw new Error("Doctor fields can't be null");
        }
    }

    public static createDoctor(doctor: IDoctorDTO): Doctor {
        return new Doctor(doctor);
    }
}
