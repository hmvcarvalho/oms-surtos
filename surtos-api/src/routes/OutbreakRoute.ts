import { Router } from 'express';
import { OutbreakController } from '../controllers/OutbreakController';

export class OutbreakRoute {
    private controller: OutbreakController;

    constructor() {
        this.controller = new OutbreakController();
    }

    routes(app: Router) {
        app.post('/api/outbreak', this.controller.postOutbreak);
        app.put(
            '/api/outbreak/:geoZoneCode/:virus',
            this.controller.putOutbreak
        );
        app.get(
            '/api/outbreak/virus/:virus',
            this.controller.getOutbreaksByVirusCode
        );
    }
}
