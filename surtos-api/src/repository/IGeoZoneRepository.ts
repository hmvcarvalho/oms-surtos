import { GeoZone } from '../domain/GeoZone';

export default interface IGeoZoneRepository {
    create: (geoZone: GeoZone) => Promise<GeoZone>;
    // update: (code: string, geoZone: GeoZone) => Promise<GeoZone>;
    // findAll: () => Promise<Array<GeoZone>>;
    // findById: (code: string) => Promise<any>;
    // deleteById: (code: string) => Promise<boolean>;
}
