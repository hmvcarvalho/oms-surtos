import { Schema, Document } from 'mongoose';
import { options, User } from './userSchema';

const adminSchema = new Schema(
    {
        funcNum: {
            type: String,
            index: true,
        },
        department: {
            type: String,
        },
    },
    options
);

const AdminSchema = User.discriminator('Admin', adminSchema);
export { AdminSchema };
