import { NextFunction, Request, Response } from 'express';
import IOutbreakDTO from '../dtos/IOutbreakDTO';
import { OutbreakService } from '../services/OutbreakService';

export class OutbreakController {
    constructor(
        private outbreakService: OutbreakService = new OutbreakService()
    ) {}

    postOutbreak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const outbreakDto: IOutbreakDTO = req.body;
            const resOutbreakDto = await this.outbreakService.createOutbreak(
                outbreakDto
            );
            res.status(201).send(resOutbreakDto);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    putOutbreak = (req: Request, res: Response, next: NextFunction) => {};

    getOutbreaksByVirusCode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            let result = await this.outbreakService.getOutbreaksByVirusCode(
                req.params.virus
            );
            res.json(result);
        } catch (error) {}
    };
}
