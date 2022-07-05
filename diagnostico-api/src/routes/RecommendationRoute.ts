import { Router } from 'express';
import IRecommendationController from '../controllers/interfaces/IRecommendationController';
export class RecommendationRoute {
    constructor(private controller: IRecommendationController = new RecommendationController()) {}

    routes(app: Router) {
        app.get('api/recomendation', this.controller.get);
    }
}
