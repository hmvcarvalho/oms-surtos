import { DoctorRoute } from "./DoctorRoute";

class Routes {
  private _doctor: DoctorRoute;
  constructor() {
    this._doctor = new DoctorRoute();
  }
  get doctor(): DoctorRoute {
    return this._doctor;
  }
}
export default Routes;
