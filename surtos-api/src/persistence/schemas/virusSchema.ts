import { Schema, model } from 'mongoose';

const VirusSchema = new Schema({
    virusCode: { type: String, require: true, index: true },
    virusName: { type: String, require: true, unique: true },
});

export default model<Document>('Virus', VirusSchema);
