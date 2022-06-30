import IPatientDTO from '../dtos/IPatientDTO';
import { User } from './User';

export class Patient extends User {
    public patientNumber: string;
    public doctorNumber: string; // DUVIDA id medicos

    constructor(patient: IPatientDTO) {
        super(patient);
        if ((patient.patientNumber, patient.doctorNumber)) {
            this.patientNumber = patient.patientNumber;
            this.doctorNumber = patient.doctorNumber; // DUVIDA id medicos
        } else {
            throw new Error("Patient fields can't be null");
        }
    }

    public static createPatient(patient: IPatientDTO): Patient {
        return new Patient(patient);
    }
}
