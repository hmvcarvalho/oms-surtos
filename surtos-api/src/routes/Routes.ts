import { GeoZoneRoute } from './GeoZoneRoute';
import { CountryRoute } from './CountryRoute';
import { VirusRoute } from './VirusRoute';
import { RecommendationRoute } from './RecommendationRoute';
import { OutbreakRoute } from './OutbreakRoute';

class Routes {
    private _recommendation: RecommendationRoute;
    private _geoZone: GeoZoneRoute;
    private _country: CountryRoute;
    private _virus: VirusRoute;
    private _outbreak: OutbreakRoute;

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._geoZone = new GeoZoneRoute();
        this._country = new CountryRoute();
        this._virus = new VirusRoute();
        this._outbreak = new OutbreakRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get outbreak(): OutbreakRoute {
        return this._outbreak;
    }
    get geoZone(): GeoZoneRoute {
        return this._geoZone;
    }

    get country(): CountryRoute {
        return this._country;
    }
    get virus(): VirusRoute {
        return this._virus;
    }
}
export default Routes;
