import { IJokeDTO } from '../../dtos/IJokeDTO';

interface IJokeService {
    getJokes(category: string): Promise<IJokeDTO[]>;
}

export { IJokeService };
