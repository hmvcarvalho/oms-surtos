import { Schema, model } from 'mongoose';

const CountrySchema = new Schema({
    countryCode: { type: String, require: true, index: true },
    countryName: { type: String, require: true, unique: true },
    geoZoneCode: { type: String, require: true },
});

export default model('Country', CountrySchema);
