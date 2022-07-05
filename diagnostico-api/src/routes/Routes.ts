import { DoctorRoute } from './DoctorRoute';
import { RecommendationRoute } from './RecommendationRoute';

class Routes {
    private _doctor: DoctorRoute;
    private _recommendation: RecommendationRoute;
    constructor() {
        this._doctor = new DoctorRoute();
        this._recommendation = new RecommendationRoute();
    }
    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get recommendation(): RecommendationRoute {
        return this._recommendation;
    }
}
export default Routes;
