import { Router } from 'express';
import { AdminController } from '../controllers/AdminController';
import IAdminController from '../controllers/interfaces/IAdminController';
export class AdminRoute {
    constructor(private controller: IAdminController = new AdminController()) {}

    routes(app: Router) {
        app.post('/api/admin', this.controller.post);
        app.put('/api/admin/:id', this.controller.update);
        app.get('/api/admin', this.controller.get);
        app.get('/api/admin/:id', this.controller.getById);
        app.delete('/api/admin/:id', this.controller.delete);
    }
}
