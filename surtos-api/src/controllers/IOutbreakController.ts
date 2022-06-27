import { Request, Response, NextFunction } from 'express';

export default interface IOutbreakController {
    postOutbreak: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    putOutbreak: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    getOutbreaksByVirusCode: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
}
