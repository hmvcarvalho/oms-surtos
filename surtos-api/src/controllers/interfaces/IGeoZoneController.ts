import { Response, Request, NextFunction } from 'express';

export default interface IGeoZoneController {
    post(req: Request, res: Response, next: NextFunction): Promise<void>;
    // put(req: Request, res: Response, next: NextFunction): Promise<void>;
    // delete(req: Request, res: Response, next: NextFunction): Promise<void>;
    // get(req: Request, res: Response, next: NextFunction): Promise<void>;
    // getById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
