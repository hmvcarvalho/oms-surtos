let {Schema, model} = require('mongoose');

const GeoZoneSchema = new Schema({
    id: Schema.Types.ObjectId,
    code : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true,
        unique : true
    },
});
module.exports = model('GeoZone', GeoZoneSchema);