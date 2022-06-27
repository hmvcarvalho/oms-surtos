import { Schema } from 'mongoose';
import { User, options } from './userSchema';

const Doctor = User.discriminator('Doctor', new Schema({ doctorNumber: { type: String, index: true } }, options));

export { Doctor };
