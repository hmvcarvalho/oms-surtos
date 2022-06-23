import IGeoZoneRepository from '../repository/IGeoZoneRepository';
import { GeoZoneRepositoryFactory } from '../repository/GeoZoneRepositoryFactory';

export class GeoZoneService {
    constructor(
        private geoZoneRepository: IGeoZoneRepository = GeoZoneRepositoryFactory.geoZoneRepository()
    ) {}
}
