let { Schema, model } = require('mongoose');

const VirusSchema = new Schema({
    id: Schema.Types.ObjectId,
    virus_cod: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },

    virus_nome: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = model('Virus', VirusSchema);
