import { Recommendation } from '../../domain/Recommendation';
import IRecommendationRepository from '../IRecommendationRepository';
import recommendationSchema from '../../persistence/schemas/recommendationSchema';
import { RecommendationMapper } from '../../mappers/RecommendationMapper';

export class MongoRecommendationRepository implements IRecommendationRepository {
    constructor(private recommendationModel = recommendationSchema) {}

    save = async (recommendation: Recommendation) => {
        const { recommendationCode, recommendationDate, recommendationValidDays, geoZoneCode } =
            RecommendationMapper.toPersistance(recommendation);

        return RecommendationMapper.toDomain(
            await this.recommendationModel.findOneAndUpdate(
                {
                    recommendationCode,
                },
                {
                    recommendationDate,
                    recommendationValidDays,
                    geoZoneCode,
                },
                {
                    upsert: true,
                    new: true,
                }
            )
        );
    };

    deleteById = async (id: string) => {
        const result = await this.recommendationModel.deleteOne({
            recommendationCode: id,
        });

        return result.deletedCount > 0;
    };

    findById = async (id: string) => {
        const recommendation = await this.recommendationModel.findOne({
            recommendationCode: id,
        });

        if (!recommendation) throw new Error('Not found');
        return recommendation;
    };

    findAll = async () => {
        const recPerList = await this.recommendationModel.find();
        return recPerList.map((rec) => RecommendationMapper.toDomain(rec));
    };
}
