import { Router } from 'express';
import { CountryController } from '../controllers/CountryController';
import ICountryController from '../controllers/interfaces/ICountryController';

export class CountryRoute {
    constructor(private controller: ICountryController = new CountryController()) {}

    routes(app: Router) {
        app.post('/api/country', this.controller.post);
        app.get('/api/country/:country_code/recommendation', this.controller.getRecommendations);
    }
}
