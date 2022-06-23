import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';

class GeoZone {
    constructor(public geoZoneCode: string, public geoZoneName: string) {}

    public static createGeoZone(geoZone: IGeoZoneDTO) {
        if (geoZone.geoZoneCode && geoZone.geoZoneName) {
            return new GeoZone(geoZone.geoZoneCode, geoZone.geoZoneName);
        } else {
            throw new Error("GeoZone fields can't be null");
        }
    }
}

export { GeoZone };
