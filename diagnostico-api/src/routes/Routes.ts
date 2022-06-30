import { DoctorRoute } from './DoctorRoute';
import { PatientRoute } from './PatientRoute';

class Routes {
    private _doctor: DoctorRoute;
    private _patient: PatientRoute;
    constructor() {
        this._doctor = new DoctorRoute();
        this._patient = new PatientRoute();
    }
    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get patient(): PatientRoute {
        return this._patient;
    }
}
export default Routes;
