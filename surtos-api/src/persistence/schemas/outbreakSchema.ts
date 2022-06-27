import { Schema, model, Types, Document } from 'mongoose';
import { IOutbreakPersistence } from '../../dataSchema/IOutbreakPersistence';

const OutbreakSchema = new Schema({
    virusCode: { type: String, required: true },
    geoZoneCode: { type: String, required: true },
    detDate: { type: Date, required: true }, // VALIDAR detDate como anterior
    endDate: { type: Date }, // à endDate
});

export default model<Document & IOutbreakPersistence>(
    'Outbreak',
    OutbreakSchema
);
