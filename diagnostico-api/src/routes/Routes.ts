import { DoctorRoute } from './DoctorRoute';
import { OutbreakRoute } from './OutbreakRoute';
import { AdminRoute } from './AdminRoute';
import { UserRoute } from './UserRoute';
class Routes {
    private _doctor: DoctorRoute;
    private _outbreak: OutbreakRoute;
    private _admin: AdminRoute;
    private _user: UserRoute;

    constructor() {
        this._doctor = new DoctorRoute();
        this._outbreak = new OutbreakRoute();
        this._admin = new AdminRoute();
        this._user = new UserRoute();
    }

    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get outbreak(): OutbreakRoute {
        return this._outbreak;
    }
    get admin(): AdminRoute {
        return this._admin;
    }
    get user(): UserRoute {
        return this._user;
    }
}

export default Routes;
