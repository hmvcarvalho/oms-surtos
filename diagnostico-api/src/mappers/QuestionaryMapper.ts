import Questionary from '../domain/Questionary';
import { IQuestionaryDTO } from '../dtos/IQuestionaryDTO';
import { IQuestionaryPersistance } from '../dataSchema/IQuestionaryPersistance';

export class QuestionaryMapper {
    public static toDTO(questionary: Questionary): IQuestionaryDTO {
        return {
            questionaryCode: questionary.questionaryCode,
            title: questionary.title,
            description: questionary.description,
            alertValue: questionary.alertValue,
            questions: questionary.questions.map((q) => ({
                question: q.question,
                options: q.options.map((o) => ({
                    description: o.description,
                    value: o.value,
                })),
            })),
            recommendations: questionary.recommendations.map((r) => ({
                recommendation: r.recommendation,
                maxVal: r.maxVal,
            })),
        };
    }

    public static toPersistence(questionary: Questionary): IQuestionaryPersistance {
        return {
            questionaryCode: questionary.questionaryCode,
            title: questionary.title,
            description: questionary.description,
            alertValue: questionary.alertValue,
            questions: questionary.questions.map((q) => ({
                question: q.question,
                options: q.options.map((o) => ({
                    description: o.description,
                    value: o.value,
                })),
            })),
            recommendations: questionary.recommendations.map((r) => ({
                recommendation: r.recommendation,
                maxVal: r.maxVal,
            })),
        };
    }

    public static toDomain(questionary: IQuestionaryDTO | IQuestionaryPersistance): Questionary {
        return Questionary.create(questionary);
    }
}
