import { Response, Request, NextFunction } from 'express';
import { GeoZoneService } from '../services/GeoZoneService';

export class GeoZoneController {
    constructor(
        private geoZoneService: GeoZoneService = new GeoZoneService()
    ) {}
    post = (req: Request, res: Response, next: NextFunction) => {};
    put = (req: Request, res: Response, next: NextFunction) => {};
    delete = (req: Request, res: Response, next: NextFunction) => {};
    get = (req: Request, res: Response, next: NextFunction) => {};
    getById = (req: Request, res: Response, next: NextFunction) => {};
}
