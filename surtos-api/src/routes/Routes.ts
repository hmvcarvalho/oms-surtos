import { RecommendationRoute } from './RecommendationRoute';
import {VirusRoute} from './VirusRoute';

class Routes {
    private _recommendation: RecommendationRoute;
    private _virus : VirusRoute;
    

    constructor() {
        this._recommendation = new RecommendationRoute();
        this._virus = new VirusRoute();
    }

    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }

    get virus(): VirusRoute {
        return this._virus;
    }
}
export default Routes;
