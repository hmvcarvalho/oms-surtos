interface IOptionDTO {
    description: string;
    value: number;
}

interface IQuestionDTO {
    question: string;
    options: IOptionDTO[];
}

interface IRecommendationDTO {
    recommendation: string;
    maxVal: number;
}

interface IQuestionaryDTO {
    questionaryCode: string;
    title: string;
    description: string;
    alertValue: number;
    questions: IQuestionDTO[];
    recommendations: IRecommendationDTO[];
}
export { IQuestionaryDTO, IQuestionDTO, IRecommendationDTO, IOptionDTO };
