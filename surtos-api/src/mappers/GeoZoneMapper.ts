import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';
import { GeoZone } from '../domain/GeoZone';
import { IGeoZonePersistence } from '../dataSchema/IGeoZonePersistence';

export class GeoZoneMapper {
    public static toDTO(geoZone: GeoZone): IGeoZoneDTO {
        return {
            geoZoneCode: geoZone.geoZoneCode,
            geoZoneName: geoZone.geoZoneName,
        };
    }

    public static toPersistence(geoZone: GeoZone): IGeoZonePersistence {
        return {
            geoZoneCode: geoZone.geoZoneCode,
            geoZoneName: geoZone.geoZoneName,
        };
    }

    public static toDomain(geoZone: GeoZone | IGeoZonePersistence): GeoZone {
        return GeoZone.createGeoZone(geoZone);
    }
}
