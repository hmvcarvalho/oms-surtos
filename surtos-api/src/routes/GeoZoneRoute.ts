import { Router } from 'express';
import { GeoZoneController } from '../controllers/GeoZoneController';

export class GeoZoneRoute {
    constructor(private controller: GeoZoneController = new GeoZoneController()) {}

    routes(app: Router) {
        app.post('/api/geozone', this.controller.post);
    }
}
