import { Schema, model, Types } from 'mongoose';

const RecommendationSchema = new Schema({
    recommendationCode: { type: String, require: true, index: true },
    recommendationDate: { type: Date, require: true },
    recommendationValidDays: { type: Number, require: true },
    geoZone: { type: Types.ObjectId, require: true, ref: 'GeoZone' },
});

export default model('Recommendation', RecommendationSchema);
