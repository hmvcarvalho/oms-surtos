import { Schema, model, Types } from 'mongoose';

const CountrySchema = new Schema({
    countryCode: { type: String, require: true, index: true },
    countryName: { type: String, require: true, unique: true },
    geoZone: { type: Types.ObjectId, require: true, ref: 'GeoZone' },
});

export default model('Country', CountrySchema);
