import { Router } from 'express';
import { DoctorController } from '../controllers/DoctorController';
import IDoctorController from '../controllers/interfaces/IDoctorController';
export class DoctorRoute {
    constructor(private controller: IDoctorController = new DoctorController()) {}

    routes(app: Router) {
        app.post('/api/doctor', this.controller.post);
        app.get('/api/doctor', this.controller.get);
        app.get('/api/doctor/:id', this.controller.getById);
        app.put('/api/doctor/:id', this.controller.update);
        app.delete('/api/doctor/:id', this.controller.delete);
    }
}
