import { Response, Request, NextFunction } from 'express';
import { IGeoZoneDTO } from '../dtos/IGeoZoneDTO';
import { GeoZoneService } from '../services/GeoZoneService';
import IGeoZoneController from './interfaces/IGeoZoneController';

export class GeoZoneController implements IGeoZoneController {
    constructor(private geoZoneService: GeoZoneService = new GeoZoneService()) {}
    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const geoZoneDto: IGeoZoneDTO = req.body;
            const newGeoZone = await this.geoZoneService.createGeoZone(geoZoneDto);
            res.status(200).send('Success creating country');
        } catch (error) {
            res.status(400).send(error);
        }
    };

    // put = async (req: Request, res: Response, next: NextFunction) => {};
    // delete = async (req: Request, res: Response, next: NextFunction) => {};
    // get = async (req: Request, res: Response, next: NextFunction) => {};
    // getById = async (req: Request, res: Response, next: NextFunction) => {};
}
