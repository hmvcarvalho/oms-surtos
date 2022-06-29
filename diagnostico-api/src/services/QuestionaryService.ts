import { IQuestionaryDTO } from '../dtos/IQuestionaryDTO';
import IQuestionaryService from './interfaces/IQuestionaryService';

export default class QuestionaryService implements IQuestionaryService {
    constructor() {}

    async getAll() {}
    async create(questionary: IQuestionaryDTO) {}
    async update(questionaryId: string, questionary: IQuestionaryDTO) {}
    async getById(questionaryId: string) {}
    async delete(questionaryId: string) {}
}
