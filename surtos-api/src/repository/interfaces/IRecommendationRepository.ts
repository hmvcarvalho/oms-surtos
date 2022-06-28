import { Recommendation } from '../../domain/Recommendation';

export default interface IRecommendationRepository {
    save: (recommendation: Recommendation) => Promise<Recommendation>;
    findAll: () => Promise<Recommendation[]>;
    findById: (id: string) => Promise<any>;
    deleteById: (id: string) => Promise<boolean>;
    findAllByGeoZoneCode(geoZoneCode: string): Promise<Recommendation[]>;
}
