import { Recommendation } from '../../domain/Recommendation';
import IRecommendationRepository from '../IRecommendationRepository';

export class MongoRecommendationRepository
    implements IRecommendationRepository
{
    create = async (recommendation: Recommendation) => {
        return {} as Recommendation;
    };

    update = async (id: string, recommendation: Recommendation) => {
        return {} as Recommendation;
    };

    deleteById = async (id: string) => {
        return false;
    };

    findById = async (id: string) => {
        return {} as Recommendation;
    };

    findAll = async () => {
        return [];
    };
}
