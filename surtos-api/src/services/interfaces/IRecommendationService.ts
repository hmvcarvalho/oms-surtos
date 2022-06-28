import { IRecommendationDTO } from '../../dtos/IRecommendationDTO';

interface IRecommendationService {
    createRecommendation(recDto: IRecommendationDTO): Promise<IRecommendationDTO>;
    updateRecommendation(id: string, recDto: IRecommendationDTO): Promise<IRecommendationDTO>;

    deleteRecommendation(id: string): Promise<Boolean>;
    getRecommendationByID(id: string): Promise<IRecommendationDTO>;
    getRecommendations(): Promise<IRecommendationDTO[]>;
    getRecommendationsByCountryCode(countryCode: string): Promise<IRecommendationDTO[]>;
}

export { IRecommendationService };
