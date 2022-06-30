import { NextFunction, Request, Response } from 'express';
import IOutbreakDTO from '../dtos/IOutbreakDTO';
import { OutbreakService } from '../services/OutbreakService';
import IOutbreakController from './interfaces/IOutbreakController';
export class OutbreakController implements IOutbreakController {
    constructor(private outbreakService: OutbreakService = new OutbreakService()) {}

    postOutbreak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const outbreakDto: IOutbreakDTO = req.body;
            const resOutbreakDto = await this.outbreakService.createOutbreak(outbreakDto);
            res.status(201).send(resOutbreakDto);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    putOutbreak = async (req: Request, res: Response, next: NextFunction) => {
        const outbreakDto: IOutbreakDTO = req.body;
        try {
            let result = await this.outbreakService.updateOutbreak(
                outbreakDto.virusCode,
                outbreakDto.geoZoneCode,
                outbreakDto.endDate
            );
            res.status(201).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOutbreaksByVirusCode = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.outbreakService.getOutbreaksByVirusCode(req.params.virus);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOutbreaksByCountry = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.outbreakService.getOutbreaksByCountry(req.params.country);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };
}
