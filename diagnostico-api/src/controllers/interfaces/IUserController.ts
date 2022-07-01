import { Request, Response, NextFunction } from 'express';

export default interface IUserController {
    post(req: Request, res: Response, next: NextFunction): Promise<void>;
}
