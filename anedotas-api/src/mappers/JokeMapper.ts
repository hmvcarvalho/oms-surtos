import { JokeDomain } from '../domain/JokeDomain';
import { IJokeDTO } from '../dtos/IJokeDTO';
import IJokePersistence from '../dataSchema/IJokePersistence';

export class JokeMapper {
    public static toDTO(joke: JokeDomain): IJokeDTO {
        return {
            category: joke.category,
            path: joke.path,
        };
    }

    public static toPersistence(joke: JokeDomain): IJokePersistence {
        return {
            category: joke.category,
            path: joke.path,
        };
    }

    public static toDomain(joke: IJokeDTO | IJokePersistence): JokeDomain {
        return JokeDomain.createJoke(joke);
    }
}
