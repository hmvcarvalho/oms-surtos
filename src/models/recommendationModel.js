const { Schema, model } = require('mongoose');

const recommendationSchema = new Schema({
    recommentadingCode: { type: String, required: true, index: true },
    geoZoneCode: { type: String, ref: 'Outbreak' },
    date: { type: Date },
    validity: { type: Number, required: true },
});

const RecommendationModel = model('Recommendation', recommendationSchema);

module.exports = { RecommendationModel, recommendationSchema };
