const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outbreakSchema = new Schema({
    id: Schema.Types.ObjectId,
    virusCode: {
        type: Schema.Types.ObjectId,
        ref: 'Virus',
        required: true,
    },
    geoCode: {
        type: Schema.Types.ObjectId,
        ref: 'GeoZone',
        required: true,
    },
    detDate: { type: Date, required: true }, // VALIDAR detDate como anterior
    endDate: { type: Date }, // a endDate
});

module.exports = mongoose.model('Outbreaks', outbreakSchema);
