import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';

export default interface IGeoZoneService {
    createGeoZone: (geoZoneDto: IGeoZoneDTO) => Promise<IGeoZoneDTO>;
}
