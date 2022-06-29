import { IQuestionaryDTO } from '../dtos/IQuestionaryDTO';
import { QuestionaryMapper } from '../mappers/QuestionaryMapper';
import IQuestionaryRepository from '../repository/interfaces/IQuestionaryRepository';
import MongoQuestionaryRepository from '../repository/mongo/MongoQuestionaryRepository';
import IQuestionaryService from './interfaces/IQuestionaryService';

export default class QuestionaryService implements IQuestionaryService {
    constructor(private questionaryRepository: IQuestionaryRepository = new MongoQuestionaryRepository()) {}

    async getAll() {
        return (await this.questionaryRepository.getAll()).map((q) => QuestionaryMapper.toDTO(q));
    }

    async create(questionary: IQuestionaryDTO) {
        const questionaryDomain = QuestionaryMapper.toDomain(questionary);
        return QuestionaryMapper.toDTO(await this.questionaryRepository.save(questionaryDomain));
    }

    async update(questionaryId: string, questionary: IQuestionaryDTO) {
        const questionaryDomain = QuestionaryMapper.toDomain({ ...questionary, questionaryCode: questionaryId });
        return QuestionaryMapper.toDTO(await this.questionaryRepository.save(questionaryDomain));
    }

    async getById(questionaryId: string) {
        return QuestionaryMapper.toDTO(await this.questionaryRepository.getById(questionaryId));
    }

    async delete(questionaryId: string) {
        return QuestionaryMapper.toDTO(await this.questionaryRepository.delete(questionaryId));
    }
}
