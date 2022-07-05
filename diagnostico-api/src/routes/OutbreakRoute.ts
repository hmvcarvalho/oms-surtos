import { Router } from 'express';
import IOutbreakController from '../controllers/interfaces/IOutbreakController';
import { OutbreakController } from '../controllers/OutbreakController';

export class OutbreakRoute {
    constructor(private controller: IOutbreakController = new OutbreakController()) {}

    routes(app: Router) {
        app.get('/api/outbreak/', this.controller.getOutbreaksByZone);
    }
}
