import { NextFunction, Request, Response } from 'express';

export default interface IVirusController {
    post: (req: Request, res: Response, Next: NextFunction) => Promise<void>;

    put: (req: Request, res: Response, Next: NextFunction) => Promise<void>;

    delete: (req: Request, res: Response, Next: NextFunction) => Promise<void>;

    get: (req: Request, res: Response, Next: NextFunction) => Promise<void>;

    getById: (req: Request, res: Response, Next: NextFunction) => Promise<void>;
}
