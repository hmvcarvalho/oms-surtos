import { Country } from '../domain/Country';

export default interface ICountryRepository {
    create: (country: Country) => Promise<Country>;
}
