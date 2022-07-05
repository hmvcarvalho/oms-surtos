import { Country } from '../../domain/Country';
import { CountryMapper } from '../../mappers/CountryMapper';
import countrySchema from '../../persistence/schemas/countrySchema';

export class MongoCountryRepository {
    constructor() {}
    create = async (country: Country) => {
        const countryPers = CountryMapper.toPersistence(country);
        const newCountryPers = await countrySchema.create(countryPers);
        return CountryMapper.toDomain(newCountryPers);
    };
    findById = async (countryCode: string): Promise<Country> => {
        const country = await countrySchema.findOne({ countryCode });
        if (!country) {
            throw new Error("Country doesn't exist");
        }
        return CountryMapper.toDomain(country);
    };
}
