import IJokeRepository from '../interface/IJokeRepository';
import { JokeDomain } from '../../domain/JokeDomain';
import { JokeMapper } from '../../mappers/JokeMapper';
import jokeSchema from '../../persistence/schemas/JokeSchema';

export class MongoJokeRepository implements IJokeRepository {
    constructor(private jokeModel = jokeSchema) {}

    save = async (joke: JokeDomain) => {
        const jokePersistence = JokeMapper.toPersistence(joke);
        const newJokePersistence = await jokeSchema.findOneAndUpdate({ category: joke.category }, jokePersistence, {
            new: true,
            upsert: true,
        });
        return JokeMapper.toDomain(newJokePersistence);
    };

    findAll = async () => {
        const jokePerList = await this.jokeModel.find();
        return jokePerList.map((x) => JokeMapper.toDomain(x));
    };

    findById = async (id: string): Promise<JokeDomain> => {
        const jokePers = await this.jokeModel.findOne({ categoria: id });
        if (jokePers === null) {
            throw "Couldn't find";
        } else {
            return JokeMapper.toDomain(jokePers);
        }
    };

    deleteById = async (id: string) => {
        return !!(await this.jokeModel.findOneAndDelete({ categoria: id }));
    };
}
