import { RecommendationRoute } from './RecommendationRoute';
import { GeoZoneRoute } from './GeoZoneRoute';
import { CountryRoute } from './CountryRoute';
import {VirusRoute} from './VirusRoute';

class Routes {
    private _recommendation: RecommendationRoute;
    private _geoZone: GeoZoneRoute;
    private _country: CountryRoute;
    private _virus : VirusRoute;

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._geoZone = new GeoZoneRoute();
        this._country = new CountryRoute();
        this._virus = new VirusRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get geoZone(): GeoZoneRoute {
        return this._geoZone;
    }

    get country(): CountryRoute {
        return this._country;

    get virus(): VirusRoute {
        return this._virus
    }
      
}
export default Routes;
