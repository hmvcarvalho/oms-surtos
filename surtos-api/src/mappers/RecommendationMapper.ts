import { IRecommendationPersistance } from '../dataSchema/IRecommendationPersistence';
import { Recommendation } from '../domain/Recommendation';
import { IRecommendationDTO } from '../dtos/IRecommendationDTO';

export class RecommendationMapper {
    public static toDto({
        recommendationCode,
        recommendationDate,
        recommendationValidDays,
        geoZoneCode,
    }: Recommendation): IRecommendationDTO {
        return {
            recommendationCode,
            recommendationDate,
            recommendationValidDays,
            geoZoneCode,
        };
    }

    public static toDomain({
        recommendationCode,
        recommendationDate,
        recommendationValidDays,
        geoZoneCode,
    }: IRecommendationDTO | IRecommendationPersistance): Recommendation {
        return new Recommendation(
            recommendationCode,
            recommendationDate,
            recommendationValidDays,
            geoZoneCode
        );
    }

    public static toPersistance({
        recommendationCode,
        recommendationDate,
        recommendationValidDays,
        geoZoneCode,
    }: Recommendation): IRecommendationPersistance {
        return {
            recommendationCode,
            recommendationDate,
            recommendationValidDays,
            geoZoneCode,
        };
    }
}
