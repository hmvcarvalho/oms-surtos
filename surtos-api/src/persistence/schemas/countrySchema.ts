import { Schema, model, Document } from 'mongoose';
import ICountryPersistence from '../../dataSchema/ICountryPersistence';

const CountrySchema = new Schema({
    countryCode: { type: String, require: true, index: true },
    countryName: { type: String, require: true, unique: true },
    geoZoneCode: { type: String, require: true },
});

export default model<ICountryPersistence & Document>('Country', CountrySchema);
