import { GeoZone } from '../../domain/GeoZone';
import { GeoZoneMapper } from '../../mappers/GeoZoneMapper';
import geoZoneSchema from '../../persistence/schemas/geoZoneSchema';
import IGeoZoneRepository from '../IGeoZoneRepository';

export class MongoGeoZoneRepository implements IGeoZoneRepository {
    constructor() {}

    create = async (geoZone: GeoZone) => {
        const geoZonePers = GeoZoneMapper.toPersistence(geoZone);
        const newGeoZonePers = await geoZoneSchema.create(geoZonePers);
        return GeoZoneMapper.toDomain(newGeoZonePers);
    };

    // update = async (code: string, geoZone: GeoZone) => {return {} as GeoZone;};
    // findAll = async () => {return [];};
    // findById = async (code: string) => {return [];};
    // deleteById = async (code: string) => {return true;};
}
