import IPatientDTO from '../dtos/IPatientDTO';
import { Patient } from '../domain/Patient';
import { UserMapper } from './UserMapper';
import IPatientPersistence from '../dataSchema/IPatientPersistence';

export class PatientMapper extends UserMapper {
    public static toDTO(patient: Patient): IPatientDTO {
        const user = this.toUserDTO(patient);
        return {
            ...user,
            patientNumber: patient.patientNumber,
            doctorNumber: patient.doctorNumber, // DUVIDA id medicos
        };
    }

    public static toPersistence(patient: Patient): IPatientPersistence {
        const user = this.toUserPersistence(patient);
        return {
            ...user,
            patientNumber: patient.patientNumber,
            doctorNumber: patient.doctorNumber, // DUVIDA id medicos
        };
    }

    public static toDomain(patient: IPatientDTO | IPatientPersistence): Patient {
        return Patient.createPatient(patient);
    }
}
