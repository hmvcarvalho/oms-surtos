import { IQuestionaryDTO } from '../../dtos/IQuestionaryDTO';

export default interface IQuestionaryService {
    create: (questionary: IQuestionaryDTO) => Promise<IQuestionaryDTO>;
    update: (questionaryId: string, questionary: IQuestionaryDTO) => Promise<IQuestionaryDTO>;
    getById: (questionaryId: string) => Promise<IQuestionaryDTO>;
    delete: (questionaryId: string) => Promise<IQuestionaryDTO>;
    getAll: () => Promise<IQuestionaryDTO[]>;
}
