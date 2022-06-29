import Questionary from '../../domain/Questionary';
import { IQuestionaryDTO } from '../../dtos/IQuestionaryDTO';

export default interface IQuestionaryRepository {
    save(questionary: IQuestionaryDTO): Promise<Questionary>;
    getById(questionaryCode: string): Promise<Questionary>;
    getAll(): Promise<Questionary[]>;
    delete(questionaryCode: string): Promise<Questionary>;
}
