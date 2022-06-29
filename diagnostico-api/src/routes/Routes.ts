import { DoctorRoute } from './DoctorRoute';
import { QuestionaryRoute } from './QuestionaryRoute';

class Routes {
    constructor(
        private _doctor: DoctorRoute = new DoctorRoute(),
        private _questionary: QuestionaryRoute = new QuestionaryRoute()
    ) {}
    get doctor(): DoctorRoute {
        return this._doctor;
    }
    get questionary() {
        return this._questionary;
    }
}
export default Routes;
