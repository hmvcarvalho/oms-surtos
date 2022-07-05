import { Router } from 'express';
import { VirusController } from '../controllers/VirusController';

export class VirusRoute {
    constructor(private controller = new VirusController()) {}

    routes(app: Router) {
        app.post('/api/virus', this.controller.post);
        app.put('/api/virus/:id', this.controller.put);
        app.delete('/api/virus', this.controller.delete);
        app.get('/api/virus', this.controller.get);
        app.get('/api/virus/:id', this.controller.getById);
    }
}
