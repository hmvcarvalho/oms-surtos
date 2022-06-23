import { RecommendationRoute } from './RecommendationRoute';
import { OutbreakRoute } from './OutbreakRoute';

class Routes {
    private _recommendation: RecommendationRoute;
    private _outbreak: OutbreakRoute;

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._outbreak = new OutbreakRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get outbreak(): OutbreakRoute {
        return this._outbreak;
    }
}
export default Routes;
