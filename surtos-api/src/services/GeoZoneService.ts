import IGeoZoneRepository from '../repository/interfaces/IGeoZoneRepository';
import { GeoZoneRepositoryFactory } from '../repository/GeoZoneRepositoryFactory';
import IGeoZoneService from './interfaces/IGeoZoneService';
import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';
import { GeoZoneMapper } from '../mappers/GeoZoneMapper';
export class GeoZoneService implements IGeoZoneService {
    constructor(private geoZoneRepository: IGeoZoneRepository = GeoZoneRepositoryFactory.geoZoneRepository()) {}

    createGeoZone = async (geoZoneDto: IGeoZoneDTO) => {
        const geoZoneDomain = GeoZoneMapper.toDomain(geoZoneDto);
        const geoZonePers = await this.geoZoneRepository.create(geoZoneDomain);
        return GeoZoneMapper.toDTO(geoZonePers);
    };
}
