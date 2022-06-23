import { RecommendationRoute } from './RecommendationRoute';
import { GeoZoneRoute } from './GeoZoneRoute';

class Routes {
    private _recommendation: RecommendationRoute;
    private _geoZone: GeoZoneRoute;

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._geoZone = new GeoZoneRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get geoZone(): GeoZoneRoute {
        return this._geoZone;
    }
}
export default Routes;
