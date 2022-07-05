import { IRecommendationDTO } from '../dtos/IRecommendationDTO';

class Recommendation {
    constructor(
        public recommendationCode: string,
        public recommendationDate: Date,
        public recommendationValidDays: number,
        public geoZoneCode: string
    ) {}
    public static createRecommendation({
        recommendationCode,
        recommendationDate,
        recommendationValidDays,
        geoZoneCode,
    }: IRecommendationDTO) {
        if (
            !recommendationCode &&
            !recommendationDate &&
            !recommendationValidDays &&
            !geoZoneCode
        )
            throw Error('Invalid Data');

        return new Recommendation(
            recommendationCode,
            recommendationDate,
            recommendationValidDays,
            geoZoneCode
        );
    }
}

export { Recommendation };
