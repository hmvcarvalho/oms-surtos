import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OutbreakSchema = new Schema({
    detDate: { type: Date, required: true }, // VALIDAR detDate como anterior
    endDate: { type: Date }, // a endDate
    virus: {
        type: Schema.Types.ObjectId,
        ref: 'Virus',
        required: true,
    },
    geoZone: {
        type: Schema.Types.ObjectId,
        ref: 'GeoZone',
        required: true,
    },
});

module.exports = mongoose.model('Outbreaks', OutbreakSchema);
