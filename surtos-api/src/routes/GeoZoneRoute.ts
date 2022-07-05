import { Router } from 'express';
import { GeoZoneController } from '../controllers/GeoZoneController';
import IGeoZoneController from '../controllers/interfaces/IGeoZoneController';

export class GeoZoneRoute {
    constructor(private controller: IGeoZoneController = new GeoZoneController()) {}

    routes(app: Router) {
        app.post('/api/geozone', this.controller.post);
    }
}
