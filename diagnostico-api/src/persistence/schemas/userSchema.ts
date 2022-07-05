import { Schema, model, SchemaOptions } from 'mongoose';

const options: SchemaOptions = { discriminatorKey: 'user' };

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

const UserSchemaModel = model('User', UserSchema);

export { UserSchemaModel, options };
