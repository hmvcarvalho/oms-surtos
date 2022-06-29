import { DoctorRoute } from './DoctorRoute';
import { AdminRoute } from './AdminRoute';

class Routes {
    private _doctor: DoctorRoute;
    private _admin: AdminRoute;
    constructor() {
        this._doctor = new DoctorRoute();
        this._admin = new AdminRoute();
    }
    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get admin(): AdminRoute {
        return this._admin;
    }
}
export default Routes;
