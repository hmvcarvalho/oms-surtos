import { IJokeDTO } from '../dtos/IJokeDTO';

class JokeDomain {
    private constructor(public jokeCode: string, public joke: string) {}

    public static createJoke(joke: IJokeDTO) {
        if (joke.jokeCode && joke.joke) {
            return new JokeDomain(joke.jokeCode, joke.joke);
        } else {
            throw new Error("Joke fields can't be null");
        }
    }
}

export { JokeDomain };
