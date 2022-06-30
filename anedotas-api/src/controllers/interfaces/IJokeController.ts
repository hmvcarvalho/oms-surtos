import { Request, Response, NextFunction } from 'express';

export default interface IJokeController {
    getAllByCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
