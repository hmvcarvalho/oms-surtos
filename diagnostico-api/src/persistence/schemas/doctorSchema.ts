import { Schema } from 'mongoose';
import { User, options } from './userSchema';

const doctorSchema = new Schema({ doctorNumber: { type: String, index: true } }, options);

const DoctorSchema = User.discriminator('Doctor', doctorSchema);

export { DoctorSchema };
