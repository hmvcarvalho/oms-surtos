import IGeoZoneRepository from '../repository/IGeoZoneRepository';
import { GeoZoneRepositoryFactory } from '../repository/GeoZoneRepositoryFactory';
import IGeoZoneService from './IGeoZoneService';
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
