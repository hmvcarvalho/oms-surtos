import { datasource } from '../app';
import ICountryRepository from './ICountryRepository';
import { MongoCountryRepository } from './mongo/MongoCountryRepository';

export class CountryRepositoryFactory {
    public static countryRepository(): ICountryRepository {
        switch (datasource.repository) {
            default:
                return new MongoCountryRepository();
        }
    }
}
