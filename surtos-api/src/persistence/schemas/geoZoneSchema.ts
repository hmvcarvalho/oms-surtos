import { Schema, model, Document } from 'mongoose';

import { IGeoZonePersistence } from '../../dataSchema/IGeoZonePersistence';

const GeoZoneSchema = new Schema({
    geoZoneCode: { type: String, require: true, index: true },
    geoZoneName: { type: String, require: true, unique: true },
});

export default model<IGeoZonePersistence & Document>('GeoZone', GeoZoneSchema);
