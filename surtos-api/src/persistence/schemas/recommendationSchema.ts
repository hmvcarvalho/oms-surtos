import { Schema, model, Document } from 'mongoose';
import { IRecommendationPersistance } from '../../dataSchema/IRecommendationPersistence';

const RecommendationSchema = new Schema({
    recommendationCode: { type: String, require: true, index: true },
    recommendationDate: { type: Date, require: true },
    recommendationValidDays: { type: Number, require: true },
    geoZoneCode: { type: String, require: true },
});

const recommendationModel = model<Document & IRecommendationPersistance>(
    'Recommendation',
    RecommendationSchema
);

export default recommendationModel;
