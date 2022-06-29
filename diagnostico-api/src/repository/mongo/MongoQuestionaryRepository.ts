import Questionary from '../../domain/Questionary';
import { questionarySchema } from '../../persistence/schemas/questionarySchema';
import IQuestionaryRepository from '../interfaces/IQuestionaryRepository';

export default class MongoQuestionaryRepository implements IQuestionaryRepository {
    constructor(private questionaryModel = questionarySchema) {}
    save = async (questionary: Questionary) => {
        return await this.questionaryModel.findOneAndUpdate(
            { questionaryCode: questionary.questionaryCode },
            questionary,
            { new: true, upsert: true }
        );
    };
}
