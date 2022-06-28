import { Schema, model, SchemaOptions } from 'mongoose';

const options: SchemaOptions = { discriminatorKey: 'User' };

const UserSchema = new Schema(
    {
        username: { type: String, index: true },
        password: { type: String },
        email: { type: String },
        phone: { type: String },
        address: { type: String },
        city: { type: String },
        dateOfBirth: { type: Date, required: true },
    },

    options
);

const User = model('User', UserSchema);

export { User, options };
