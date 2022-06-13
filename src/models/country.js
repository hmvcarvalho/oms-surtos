let {Schema, model} = require('mongoose');

const CountrySchema = new Schema({
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
    zoneCode : {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
    }
});
module.exports = model('Country', CountrySchema);