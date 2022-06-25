import { NextFunction, Request, Response } from 'express';
import { RecommendationService } from '../services/RecommendationService';

export class RecommendationController {
    constructor(
        private recommendationService: RecommendationService = new RecommendationService()
    ) {}

    post = async (req: Request, res: Response, next: NextFunction) => {};
    put = (req: Request, res: Response, next: NextFunction) => {};
    delete = (req: Request, res: Response, next: NextFunction) => {};
    get = (req: Request, res: Response, next: NextFunction) => {};
    getById = (req: Request, res: Response, next: NextFunction) => {};
}
