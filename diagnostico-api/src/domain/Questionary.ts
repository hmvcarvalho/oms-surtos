import { IQuestionaryPersistance } from '../dataSchema/IQuestionaryPersistence';
import { IQuestionaryDTO } from '../dtos/IQuestionaryDTO';

class QuestionOption {
    constructor(public description: string, public value: number) {
        this.validate();
    }

    validate() {
        if (!this.description || !this.value) throw 'Invalid Option';
    }
}

class Question {
    constructor(public question: string, public options: QuestionOption[]) {
        this.validate();
    }

    validate() {
        if (!this.question || !this.options) throw 'Invalid Question';
    }
}

class Recommendation {
    constructor(public recommendation: string, public maxVal: number) {
        this.validate();
    }

    validate() {
        if (!this.recommendation || !this.maxVal) throw 'Invalid Recommendation';
    }
}

class Questionary {
    private constructor(
        public questionaryCode: string,
        public title: string,
        public description: string,
        public alertValue: number,
        public questions: Question[],
        public recommendations: Recommendation[]
    ) {
        this.validate();
    }

    validate() {
        if (!this.title || !this.description || !this.alertValue || !this.questions || !this.recommendations)
            throw 'Invalid Questionary';
    }

    public static create(questionary: IQuestionaryDTO | IQuestionaryPersistance) {
        return new Questionary(
            questionary.questionaryCode,
            questionary.title,
            questionary.description,
            questionary.alertValue,
            questionary.questions.map(
                (q) =>
                    new Question(
                        q.question,
                        q.options.map((o) => new QuestionOption(o.description, o.value))
                    )
            ),
            questionary.recommendations.map((r) => new Recommendation(r.recommendation, r.maxVal))
        );
    }
}

export default Questionary;
