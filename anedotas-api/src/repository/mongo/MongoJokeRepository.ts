import IJokeRepository from '../interface/IJokeRepository';
import { JokeDomain } from '../../domain/JokeDomain';
import { JokeMapper } from '../../mappers/JokeMapper';
import jokeSchema from '../../persistence/schemas/JokeSchema';

export class MongoJokeRepository implements IJokeRepository {
    constructor(private jokeModel = jokeSchema) {}

    save = async (joke: JokeDomain) => {
        const jokePersistence = JokeMapper.toPersistence(joke);
        const newJokePersistence = await jokeSchema.create(jokePersistence);
        return JokeMapper.toDomain(newJokePersistence);
    };

    findAll = async () => {
        return {} as JokeDomain[];
    };

    findById = async (id: string) => {
        return {} as JokeDomain;
    };

    deleteById = async (id: string) => {
        return {} as boolean;
    };
}
