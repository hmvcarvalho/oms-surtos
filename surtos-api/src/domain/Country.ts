import { ICountryDTO } from '../dtos/ICountryDTO';

class Country {
    constructor(
        public countryCode: string,
        public countryName: string,
        public geoZoneCode: string
    ) {}

    public static createCountry(country: ICountryDTO) {
        if (country.countryCode && country.countryName && country.geoZoneCode) {
            return new Country(
                country.countryCode,
                country.countryName,
                country.geoZoneCode
            );
        } else {
            throw new Error("Country fields can't be null");
        }
    }
}

export { Country };
