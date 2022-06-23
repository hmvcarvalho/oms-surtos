import { Schema, model } from 'mongoose';
import { IVirusPersistence } from '../../dataSchema/IVirusPresistence';

const VirusSchema = new Schema({
    virusCode: { type: String, require: true, index: true },
    virusName: { type: String, require: true, unique: true },
});

export default model<IVirusPersistence & Document>('Virus', VirusSchema);
