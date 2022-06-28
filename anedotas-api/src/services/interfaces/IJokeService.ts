import { IJokeDTO } from '../../dtos/IJokeDTO';

interface IJokeService {
    createJoke: (jokeDTO: IJokeDTO) => Promise<IJokeDTO>;
    // updateJoke(id: string, jokeDTo: IJokeDTO): Promise<IJokeDTO>;
    // deleteJoke(id: string): Promise<Boolean>;
    // getJokeById(id: string): Promise<IJokeDTO>;
    // getAllJokes(): Promise<IJokeDTO[]>;
}

export { IJokeService };
