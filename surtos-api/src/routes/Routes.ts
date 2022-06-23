import { RecommendationRoute } from './RecommendationRoute';
import { GeoZoneRoute } from './GeoZoneRoute';
import { CountryRoute } from './CountryRoute';
class Routes {
    private _recommendation: RecommendationRoute;
    private _geoZone: GeoZoneRoute;
    private _country: CountryRoute;

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._geoZone = new GeoZoneRoute();
        this._country = new CountryRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get geoZone(): GeoZoneRoute {
        return this._geoZone;
    }

    get country(): CountryRoute {
        return this._country;
    }
}
export default Routes;
