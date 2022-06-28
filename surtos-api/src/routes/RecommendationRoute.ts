import { Router } from 'express';
import { IRecommendationController } from '../controllers/IRecommendationController';
import { RecommendationController } from '../controllers/RecommendationController';

export class RecommendationRoute {
    constructor(private controller: IRecommendationController = new RecommendationController()) {}

    routes(app: Router) {
        app.post('/api/recommendation', this.controller.post);
        app.put('/api/recommendation/:id', this.controller.put);
        app.delete('/api/recommendation/:id', this.controller.delete);
        app.get('/api/recommendation', this.controller.get);
        app.get('/api/recommendation/:id', this.controller.getById);
    }
}
