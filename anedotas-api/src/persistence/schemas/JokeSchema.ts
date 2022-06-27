import { Schema, model, Document } from 'mongoose';
import IJokePersistence from '../../dataSchema/IJokePersistence';

const JokeSchema = new Schema({
    category: { type: String, require: true, index: true },
    path: { type: String, require: true },
});

const jokeModel = model<Document & IJokePersistence>('Joke', JokeSchema);

export default jokeModel;
