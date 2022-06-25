import { Request, Response, NextFunction } from 'express';
import { VirusService } from '../services/VirusService';
import { IVirusDTO } from '../dtos/IVirusDTO';
export class VirusController {
    constructor(private service: VirusService = new VirusService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let virusDTO: IVirusDTO = req.body;
            let result = await this.service.createVirus(virusDTO);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {};

    put = async (req: Request, res: Response, next: NextFunction) => {};

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result: IVirusDTO[] = await this.service.getAllVirus();
            res.json(result);
        } catch (error) {
            res.send(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {};
}
