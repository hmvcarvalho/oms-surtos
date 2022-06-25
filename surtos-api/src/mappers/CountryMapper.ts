import { Country } from '../domain/Country';
import { ICountryDTO } from '../dtos/ICountryDTO';
import ICountryPersistence from '../dataSchema/ICountryPersistence';

export class CountryMapper {
    public static toDTO(country: Country): ICountryDTO {
        return {
            countryCode: country.countryCode,
            countryName: country.countryName,
            geoZoneCode: country.geoZoneCode,
        };
    }

    public static toPersistence(country: Country): ICountryPersistence {
        return {
            countryCode: country.countryCode,
            countryName: country.countryName,
            geoZoneCode: country.geoZoneCode,
        };
    }

    public static toDomain(
        country: ICountryDTO | ICountryPersistence
    ): Country {
        return Country.createCountry(country);
    }
}
