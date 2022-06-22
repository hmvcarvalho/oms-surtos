import { Schema, model } from 'mongoose';

const GeoZoneSchema = new Schema({
    geoZoneCode: { type: String, require: true, index: true },
    geoZoneName: { type: String, require: true, unique: true },
});

export default model('GeoZone', GeoZoneSchema);
