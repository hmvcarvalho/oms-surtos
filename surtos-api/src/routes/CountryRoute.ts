import { Router } from 'express';
import { CountryController } from '../controllers/CountryController';

export class CountryRoute {
    constructor(private controller: CountryController = new CountryController()) {}

    routes(app: Router) {
        app.post('/api/country', this.controller.post);
    }
}
