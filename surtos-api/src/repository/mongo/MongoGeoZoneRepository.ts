import { GeoZone } from '../../domain/GeoZone';
import IGeoZoneRepository from '../IGeoZoneRepository';

export class MongoGeoZoneRepository implements IGeoZoneRepository {
    create = async (geoZone: GeoZone) => {
        return {} as GeoZone;
    };

    update = async (code: string, geoZone: GeoZone) => {
        return {} as GeoZone;
    };

    findAll = async () => {
        return [];
    };

    findById = async (code: string) => {
        return [];
    };

    deleteById = async (code: string) => {
        return true;
    };
}
