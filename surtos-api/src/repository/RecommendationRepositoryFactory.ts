import IRecommendationRepository from './IRecommendationRepository';
import { MongoRecommendationRepository } from './mongo/MongoRecommendationRepository';
import { datasource } from '../app';

export class RecommendationRepositoryFactory {
    public static recommendationRepository(): IRecommendationRepository {
        switch (datasource.repository) {
            default:
                return new MongoRecommendationRepository();
        }
    }
}
