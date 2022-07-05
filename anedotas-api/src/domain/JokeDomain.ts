import { IJokeDTO } from '../dtos/IJokeDTO';

class JokeDomain {
    constructor(public category: string, public path: string) {}

    public static createJoke(joke: IJokeDTO) {
        if (joke.category && joke.path) {
            return new JokeDomain(joke.category, joke.path);
        } else {
            throw new Error("Joke fields can't be null");
        }
    }
}

export { JokeDomain };
