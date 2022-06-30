import { Router } from 'express';
import { PatientController } from '../controllers/PatientController';

export class PatientRoute {
    constructor(private controller: PatientController = new PatientController()) {}

    routes(app: Router) {
        app.post('/api/patient', this.controller.post);
        app.get('/api/patient/:patientNumber', this.controller.getByID);
        app.get('/api/patient', this.controller.getAll);
        // PUT
        // DEL
    }
}
