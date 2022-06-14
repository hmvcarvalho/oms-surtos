const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outbreakSchema = new Schema({
    id: Schema.Types.ObjectId,
    virusCode: { type: String, required: true },    
    geoCode: { type: String, required: true },      // REF geoZone
    detDate: { type: Date, required: true },        // VALIDAR detDate como anterior
    endDate: { type: Date },                        // a endDate
});

module.exports = mongoose.model('Outbreaks', outbreakSchema);
