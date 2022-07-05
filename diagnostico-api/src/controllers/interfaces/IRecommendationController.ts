import { Request, Response, NextFunction } from 'express';

export default interface IRecommendationController {
    get(req: Request, res: Response, next: NextFunction): Promise<void>;

    // post(req: Request, res: Response, next: NextFunction): Promise<void>;
    // getById(req: Request, res: Response, next: NextFunction): Promise<void>;
    // update(req: Request, res: Response, next: NextFunction): Promise<void>;
    // delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
