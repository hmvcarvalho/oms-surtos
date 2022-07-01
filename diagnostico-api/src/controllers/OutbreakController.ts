import { Request, Response, NextFunction } from 'express';
import IOutbreakService from '../services/interfaces/IOutbreakService';
import { OutbreakService } from '../services/OutbreakService';
import IOutbreakController from './interfaces/IOutbreakController';

export class OutbreakController implements IOutbreakController {
    constructor(private outbreakService: IOutbreakService = new OutbreakService()) {}

    getOutbreaksByZone = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const country: string = req.params.zone;
            const outbreaksListDto = await this.outbreakService.getOutbreaksByZone(country);
            res.send(outbreaksListDto);
        } catch (error) {
            res.status(400).send(error);
        }
    };
}
