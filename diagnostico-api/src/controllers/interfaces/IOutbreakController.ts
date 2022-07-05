import { Request, Response, NextFunction } from 'express';

export default interface IOutbreakController {
    getOutbreaksByZone(req: Request, res: Response, next: NextFunction): Promise<void>;
}
