import { IRecommendationDTO } from '../dtos/IRecommendationDTO';
import { RecommendationMapper } from '../mappers/RecommendationMapper';
import { CountryRepositoryFactory } from '../repository/CountryRepositoryFactory';
import ICountryRepository from '../repository/interfaces/ICountryRepository';
import IRecommendationRepository from '../repository/interfaces/IRecommendationRepository';
import { RecommendationRepositoryFactory } from '../repository/RecommendationRepositoryFactory';
import { IRecommendationService } from './interfaces/IRecommendationService';

export default class RecommendationService implements IRecommendationService {
    constructor(
        private recommendationRepository: IRecommendationRepository = RecommendationRepositoryFactory.recommendationRepository(),
        private countryRepository: ICountryRepository = CountryRepositoryFactory.countryRepository()
    ) {}

    async createRecommendation(recDto: IRecommendationDTO): Promise<IRecommendationDTO> {
        const recDom = RecommendationMapper.toDomain(recDto);
        return RecommendationMapper.toDto(await this.recommendationRepository.save(recDom));
    }

    async updateRecommendation(id: string, recDto: IRecommendationDTO): Promise<IRecommendationDTO> {
        const recDom = RecommendationMapper.toDomain({
            ...recDto,
            recommendationCode: id,
        });
        return RecommendationMapper.toDto(await this.recommendationRepository.save(recDom));
    }

    async deleteRecommendation(id: string): Promise<Boolean> {
        return await this.recommendationRepository.deleteById(id);
    }

    async getRecommendations(): Promise<IRecommendationDTO[]> {
        const recsDomList = await this.recommendationRepository.findAll();
        return recsDomList.map((rec) => RecommendationMapper.toDto(rec));
    }

    async getRecommendationByID(id: string): Promise<IRecommendationDTO> {
        return RecommendationMapper.toDto(await this.recommendationRepository.findById(id));
    }

    async getRecommendationsByCountryCode(countryCode: string): Promise<IRecommendationDTO[]> {
        const { geoZoneCode } = await this.countryRepository.findById(countryCode);
        const recsDomList = await this.recommendationRepository.findAllByGeoZoneCode(geoZoneCode);
        return recsDomList.map((rec) => RecommendationMapper.toDto(rec));
    }
}
