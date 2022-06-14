const { Schema, model, Types } = require('mongoose');

const recommendationSchema = new Schema({
    recommendCode: { type: String, required: true, index: true },
    geoZoneCode: { type: Types.ObjectId, required: true, ref: 'GeoZone' },
    date: { type: Date, required: true },
    validDays: { type: Number, required: true },
});

const RecommendationModel = model('Recommendation', recommendationSchema);

module.exports = { RecommendationModel, recommendationSchema };
