import { Schema, Document } from 'mongoose';
import IDoctorPersistence from '../../dataSchema/IUserPersistence';
import { User, options } from './userSchema';

const DoctorSchema = User.discriminator<IDoctorPersistence & Document>(
    'Doctor',
    new Schema({ doctorNumber: { type: String, index: true } }, options)
);

export { DoctorSchema };
