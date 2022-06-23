import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';

class GeoZone {
    constructor(public geoZoneCode: string, public geoZoneName: string) {}

    public static createGeoZone(geoZone: IGeoZoneDTO) {
        return new GeoZone(geoZone.geoZoneCode, geoZone.geoZoneName);
    }
}

export { GeoZone };
