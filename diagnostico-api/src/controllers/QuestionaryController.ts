import { Request, Response, NextFunction } from 'express';
import { IQuestionaryDTO } from '../dtos/IQuestionaryDTO';
import IQuestionaryService from '../services/interfaces/IQuestionaryService';
import QuestionaryService from '../services/QuestionaryService';
import IQuestionaryController from './interfaces/IQuestionaryController';

export default class QuestionaryController implements IQuestionaryController {
    constructor(private questionaryService: IQuestionaryService = new QuestionaryService()) {}
    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const questionary = await this.questionaryService.create(req.body as IQuestionaryDTO);
            res.status(201).json(questionary);
        } catch (error) {
            res.status(400).json(error);
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.questionaryService.getAll());
        } catch (error) {
            res.status(400).json(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const questionary = await this.questionaryService.getById(req.params.id);
            res.json(questionary);
        } catch (error) {
            res.status(400).json(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const questionary = await this.questionaryService.update(req.params.id, req.body as IQuestionaryDTO);
            res.json(questionary);
        } catch (error) {
            res.status(400).json(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.questionaryService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json(error);
        }
    };
}
