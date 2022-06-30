import { GeoZone } from '../../domain/GeoZone';
import { GeoZoneMapper } from '../../mappers/GeoZoneMapper';
import geoZoneSchema from '../../persistence/schemas/geoZoneSchema';
import IGeoZoneRepository from '../interfaces/IGeoZoneRepository';

export class MongoGeoZoneRepository implements IGeoZoneRepository {
    constructor() {}

    create = async (geoZone: GeoZone) => {
        const geoZonePers = GeoZoneMapper.toPersistence(geoZone);
        const newGeoZonePers = await geoZoneSchema.create(geoZonePers);
        return GeoZoneMapper.toDomain(newGeoZonePers);
    };

    findById = async (geoZoneCode: string) => {
        const theGeoZone = await geoZoneSchema.findOne({ geoZoneCode: geoZoneCode });
        if (theGeoZone === null) return null;
        return GeoZoneMapper.toDomain(theGeoZone);
    };

    // update = async (code: string, geoZone: GeoZone) => {return {} as GeoZone;};
    // findAll = async () => {return [];};
    // deleteById = async (code: string) => {return true;};
}
