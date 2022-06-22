import { Recommendation } from '../domain/Recommendation';

export default interface IRecommendationRepository {
    create: (recommendation: Recommendation) => Promise<Recommendation>;
    update: (
        id: string,
        recommendation: Recommendation
    ) => Promise<Recommendation>;
    findAll: () => Promise<Array<Recommendation>>;
    findById: (name: string) => Promise<any>;
    deleteById: (name: string) => Promise<boolean>;
}
