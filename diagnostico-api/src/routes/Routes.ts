import { DoctorRoute } from './DoctorRoute';
import { AdminRoute } from './AdminRoute';
import { UserRoute } from './UserRoute';

class Routes {
    private _doctor: DoctorRoute;
    private _admin: AdminRoute;
    private _user: UserRoute;

    constructor() {
        this._doctor = new DoctorRoute();
        this._admin = new AdminRoute();
        this._user = new UserRoute();
    }
    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get admin(): AdminRoute {
        return this._admin;
    }
    get user(): UserRoute {
        return this._user;
    }
}

export default Routes;
