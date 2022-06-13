const { Schema, model } = require('mongoose');

const recommendationSchema = new Schema({
    recommendCode: { type: String, required: true, index: true },
    geoZoneCode: { type: String, required: true, ref: 'Outbreak' },
    date: { type: Date, required: true },
    validDays: { type: Number, required: true },
});

const RecommendationModel = model('Recommendation', recommendationSchema);

module.exports = { RecommendationModel, recommendationSchema };
