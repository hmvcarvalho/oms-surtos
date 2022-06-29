import { Request, Response, Next } from 'express';
import IQuestionaryService from '../services/interfaces/IQuestionaryService';
import IQuestionaryController from './interfaces/IQuestionaryController';

export default class QuestionaryController implements IQuestionaryController {
    constructor(private questionaryService: IQuestionaryService) {}
    post = async (req: Request, res: Response, next: Next) => {};
    get = async (req: Request, res: Response, next: Next) => {};
    getById = async (req: Request, res: Response, next: Next) => {};
    update = async (req: Request, res: Response, next: Next) => {};
    delete = async (req: Request, res: Response, next: Next) => {};
}
