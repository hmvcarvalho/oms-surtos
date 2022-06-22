import { Router } from 'express';
import { RecommendationController } from '../controllers/RecommendationController';

export class RecommendationRoute {
    private controller: RecommendationController;

    constructor() {
        this.controller = new RecommendationController();
    }

    routes(app: Router) {
        app.post('/api/recommendation', this.controller.post);
        app.put('/api/recommendation/:id', this.controller.put);
        app.delete('/api/recommendation/:id', this.controller.delete);
        app.get('/api/recommendation', this.controller.get);
        app.get('/api/recommendation/:id', this.controller.getById);
    }
}
