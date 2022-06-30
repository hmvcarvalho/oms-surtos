import { ICountryDTO } from '../dtos/ICountryDTO';
import { CountryMapper } from '../mappers/CountryMapper';
import { CountryRepositoryFactory } from '../repository/CountryRepositoryFactory';
import { GeoZoneRepositoryFactory } from '../repository/GeoZoneRepositoryFactory';
import ICountryRepository from '../repository/interfaces/ICountryRepository';
import IGeoZoneRepository from '../repository/interfaces/IGeoZoneRepository';
import ICountryService from './interfaces/ICountryService';

class CountryService implements ICountryService {
    constructor(
        private countryRepository: ICountryRepository = CountryRepositoryFactory.countryRepository(),
        private geoZoneRepository: IGeoZoneRepository = GeoZoneRepositoryFactory.geoZoneRepository()
    ) {}

    createService = async (countryDto: ICountryDTO) => {
        const countryDomain = CountryMapper.toDomain(countryDto);
        const theGeoZone = await this.geoZoneRepository.findById(countryDomain.geoZoneCode);
        if (theGeoZone !== null) {
            const countryPers = await this.countryRepository.create(countryDomain);
            return CountryMapper.toDTO(countryPers);
        } else {
            throw new Error('GeoZoneCode is not registered at DB');
        }
    };
}

export { CountryService };
