import Questionary from '../../domain/Questionary';
import { QuestionaryMapper } from '../../mappers/QuestionaryMapper';
import { QuestionaryModel } from '../../persistence/schemas/questionarySchema';
import IQuestionaryRepository from '../interfaces/IQuestionaryRepository';

export default class MongoQuestionaryRepository implements IQuestionaryRepository {
    constructor(private questionaryModel = QuestionaryModel) {}
    save = async (questionary: Questionary) => {
        const { questionaryCode } = questionary;

        return QuestionaryMapper.toDomain(
            await this.questionaryModel.findOneAndUpdate(
                { questionaryCode: questionary.questionaryCode },
                questionary,
                {
                    new: true,
                    upsert: true,
                }
            )
        );
    };

    getById = async (questionaryCode: string) => {
        const questionary = await this.questionaryModel.findOne({ questionaryCode });
        if (!questionary) {
            throw new Error(`Questionary with code ${questionaryCode} not found`);
        }
        return QuestionaryMapper.toDomain(questionary);
    };

    getAll = async () => {
        return (await this.questionaryModel.find()).map((q) => QuestionaryMapper.toDomain(q));
    };

    delete = async (questionaryCode: string) => {
        const questionary = await this.questionaryModel.findOneAndDelete({ questionaryCode });
        if (!questionary) {
            throw new Error(`Questionary with code ${questionaryCode} not found`);
        }
        return QuestionaryMapper.toDomain(questionary);
    };
}
