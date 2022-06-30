import { JokeDomain } from '../domain/JokeDomain';
import { IJokeDTO } from '../dtos/IJokeDTO';
import IJokePersistence from '../dataSchema/IJokePersistence';

export class JokeMapper {
    public static toDTO(joke: JokeDomain): IJokeDTO {
        return {
            jokeCode: joke.jokeCode,
            joke: joke.joke,
        };
    }

    public static toDomain(joke: IJokeDTO | IJokePersistence): JokeDomain {
        return JokeDomain.createJoke(joke);
    }
}
