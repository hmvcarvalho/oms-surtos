import { IRecommendationDTO } from '../dtos/IRecommendationDTO';
import { RecommendationMapper } from '../mappers/RecommendationMapper';
import IRecommendationRepository from '../repository/IRecommendationRepository';
import { RecommendationRepositoryFactory } from '../repository/RecommendationRepositoryFactory';
import { IRecommendationService } from './IRecommendationService';

export default class RecommendationService implements IRecommendationService {
    constructor(
        private recommendationRepository: IRecommendationRepository = RecommendationRepositoryFactory.recommendationRepository()
    ) {}

    async createRecommendation(
        recDto: IRecommendationDTO
    ): Promise<IRecommendationDTO> {
        const recDom = RecommendationMapper.toDomain(recDto);
        return RecommendationMapper.toDto(
            await this.recommendationRepository.save(recDom)
        );
    }

    async updateRecommendation(
        id: string,
        recDto: IRecommendationDTO
    ): Promise<IRecommendationDTO> {
        const recDom = RecommendationMapper.toDomain({
            ...recDto,
            recommendationCode: id,
        });
        return RecommendationMapper.toDto(
            await this.recommendationRepository.save(recDom)
        );
    }

    async deleteRecommendation(id: string): Promise<Boolean> {
        return await this.recommendationRepository.deleteById(id);
    }

    async getRecommendations(): Promise<IRecommendationDTO[]> {
        const recsDomList = await this.recommendationRepository.findAll();
        return recsDomList.map((rec) => RecommendationMapper.toDto(rec));
    }

    async getRecommendationByID(id: string): Promise<IRecommendationDTO> {
        return RecommendationMapper.toDto(
            await this.recommendationRepository.findById(id)
        );
    }
}
