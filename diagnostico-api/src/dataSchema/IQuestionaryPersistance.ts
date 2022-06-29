interface IQuestionOptionPersistance {
    description: string;
    value: number;
}

interface IQuestionPersistance {
    question: string;
    options: IQuestionOptionPersistance[];
}

interface IRecommendationPersistance {
    recommendation: string;
    maxVal: number;
}

interface IQuestionaryPersistance {
    questionaryCode: string;
    title: string;
    description: string;
    alertValue: number;
    questions: IQuestionPersistance[];
    recommendations: IRecommendationPersistance[];
}

export { IQuestionaryPersistance, IQuestionPersistance, IRecommendationPersistance, IQuestionOptionPersistance };
