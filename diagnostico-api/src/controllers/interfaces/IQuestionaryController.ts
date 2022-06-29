import { Request, Response, Next } from 'express';

export default interface IQuestionaryController {
    post: (req: Request, res: Response, next: Next) => Promise<void>;
    get: (req: Request, res: Response, next: Next) => Promise<void>;
    getById: (req: Request, res: Response, next: Next) => Promise<void>;
    update: (req: Request, res: Response, next: Next) => Promise<void>;
    delete: (req: Request, res: Response, next: Next) => Promise<void>;
}
