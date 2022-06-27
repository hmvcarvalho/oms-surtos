import { Schema } from 'mongoose';
import { User, options } from './userSchema';

const doctorSchema = new Schema({ doctorNumber: { type: String, index: true } }, options);

const Doctor = User.discriminator('Doctor', doctorSchema);

export { Doctor };
