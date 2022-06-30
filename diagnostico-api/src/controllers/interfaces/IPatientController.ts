import { Request, Response, NextFunction } from 'express';

export default interface IPatientController {
    post(req: Request, res: Response, next: NextFunction): Promise<void>;
    // get(req: Request, res: Response, next: NextFunction): Promise<void>;
    // getById
    // update
    // delete
}
