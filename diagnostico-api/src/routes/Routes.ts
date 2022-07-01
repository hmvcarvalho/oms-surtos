import { DoctorRoute } from './DoctorRoute';
import { UserRoute } from './UserRoute';

class Routes {
    private _doctor: DoctorRoute;
    private _user: UserRoute;

    constructor() {
        this._doctor = new DoctorRoute();
        this._user = new UserRoute();
    }

    get doctor(): DoctorRoute {
        return this._doctor;
    }

    get user(): UserRoute {
        return this._user;
    }
}
export default Routes;
