import { DoctorRoute } from './DoctorRoute';
import { OutbreakRoute } from './OutbreakRoute';
class Routes {
    private _doctor: DoctorRoute;
    private _outbreak: OutbreakRoute;

    constructor() {
        this._doctor = new DoctorRoute();
        this._outbreak = new OutbreakRoute();
    }
    get doctor(): DoctorRoute {
        return this._doctor;
    }

    get outbreak(): OutbreakRoute {
        return this._outbreak;
    }
}
export default Routes;
