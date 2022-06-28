import { Router } from 'express';
import { CountryController } from '../controllers/CountryController';
import ICountryController from '../controllers/ICountryController';

export class CountryRoute {
    constructor(private controller: ICountryController = new CountryController()) {}

    routes(app: Router) {
        app.post('/api/country', this.controller.post);
        app.get('/api/countries/:country_code/recommendations', this.controller.getRecommendations);
    }
}
