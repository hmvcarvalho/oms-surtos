import { Request, Response, NextFunction } from 'express';

export default interface ICountryController {
    post(req: Request, res: Response, next: NextFunction): Promise<void>;
}
