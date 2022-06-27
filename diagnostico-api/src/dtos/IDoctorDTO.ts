import IUserDTO from './IUserDTO';

export default interface IDoctorDTO extends IUserDTO {
    doctorNumber: string;
}
