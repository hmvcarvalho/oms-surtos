import { model, Schema, Document } from 'mongoose';
import { IQuestionaryPersistance } from '../../dataSchema/IQuestionaryPersistence';

const optionSchema = new Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
});
const questionSchema = new Schema({
    question: { type: String, required: true },
    options: [optionSchema],
});

const recommendationSchema = new Schema({
    recommendation: { type: String, required: true },
    maxVal: { type: Number, required: true },
});

const questionarySchema = new Schema({
    title: { type: String, required: true },
    description: String,
    questions: [{ type: questionSchema, required: true }],
    recommendations: [{ type: recommendationSchema, required: true }],
    alertValue: { type: Number, required: true },
});

const QuestionaryModel = model<IQuestionaryPersistance & Document>('Questionary', questionarySchema);

export { questionarySchema, QuestionaryModel };
