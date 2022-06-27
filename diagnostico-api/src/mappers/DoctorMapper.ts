import IDoctorDTO from '../dtos/IDoctorDTO';
import { Doctor } from '../domain/Doctor';
import { UserMapper } from './UserMapper';
import IDoctorPersistence from '../dataSchema/IDoctorPersistence';

export class DoctorMapper extends UserMapper {
    public static toDTO(doctor: Doctor): IDoctorDTO {
        const user = this.toUserDTO(doctor);
        return {
            ...user,
            doctorNumber: doctor.doctorNumber,
        };
    }

    public static toPersistence(doctor: Doctor): IDoctorPersistence {
        const user = this.toUserPersistence(doctor);
        return {
            ...user,
            doctorNumber: doctor.doctorNumber,
        };
    }

    public static toDomain(doctor: IDoctorDTO | IDoctorPersistence): Doctor {
        return Doctor.createDoctor(doctor);
    }
}
