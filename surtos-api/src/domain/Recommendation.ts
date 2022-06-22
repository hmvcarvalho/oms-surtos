import { IRecommendationDTO } from '../dtos/IRecommendationDTO';

class Recommendation {
    public static createRecommendation(dto: IRecommendationDTO) {
        return new Recommendation();
    }
}

export { Recommendation };
