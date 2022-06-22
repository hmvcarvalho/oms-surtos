import { IRecommendationDTO } from '../dtos/IRecommendationDTO';
import IRecommendationRepository from '../repository/IRecommendationRepository';
import { RecommendationRepositoryFactory } from '../repository/RecommendationRepositoryFactory';

export class RecommendationService {
    constructor(
        private recommendationRepository: IRecommendationRepository = RecommendationRepositoryFactory.recommendationRepository()
    ) {}

    async createRecommendation(
        recDto: IRecommendationDTO
    ): Promise<IRecommendationDTO> {
        return {} as IRecommendationDTO;
    }

    async updateRecommendation(
        id: string,
        recDto: IRecommendationDTO
    ): Promise<IRecommendationDTO> {
        return {} as IRecommendationDTO;
    }

    async deleteRecommendation(): Promise<Boolean> {
        return false;
    }

    async getRecommendations(): Promise<IRecommendationDTO[]> {
        return [];
    }

    async getRecommendationByID(id: string): Promise<IRecommendationDTO> {
        return {} as IRecommendationDTO;
    }
}
