let { Schema, model } = require('mongoose');

const CountrySchema = new Schema({
    id: Schema.Types.ObjectId,
    code: {
        type: String,
        required: [true, 'Country code must be inserted'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Country name must be inserted'],
        unique: true,
    },
    geoZoneCode: {
        type: Schema.Types.ObjectId,
        ref: 'GeoZone',
    },
});
module.exports = model('Country', CountrySchema);
