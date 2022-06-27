import IGeoZoneRepository from './IGeoZoneRepository';
import { MongoGeoZoneRepository } from './mongo/MongoGeoZoneRepository';
import { datasource } from '../app';

export class GeoZoneRepositoryFactory {
    public static geoZoneRepository(): IGeoZoneRepository {
        switch (datasource.repository) {
            default:
                return new MongoGeoZoneRepository();
        }
    }
}
