import { Schema, Document } from 'mongoose';
import IUserPersistence from '../../dataSchema/IUserPersistence';
import { User, options } from './userSchema';

const DoctorSchema = User.discriminator<IUserPersistence & Document>(
    'Doctor',
    new Schema({ doctorNumber: { type: String, index: true } }, options)
);

export { DoctorSchema };
