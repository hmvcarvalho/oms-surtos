import { Schema } from 'mongoose';
import { User, options } from './userSchema';

const patientSchema = new Schema({ patientNumber: { type: String, index: true } }, options);

const Patient = User.discriminator('Patient', patientSchema);

export { patientSchema };
