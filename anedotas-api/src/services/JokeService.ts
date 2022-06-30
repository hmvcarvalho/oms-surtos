import { JokeMapper } from '../mappers/JokeMapper';
import IJokeRepository from '../repository/interface/IJokeRepository';
import { JsonJokeRepository } from '../repository/json/JsonJokeRepository';
import { IJokeService } from './interfaces/IJokeService';

class JokeService implements IJokeService {
    constructor(private jokeRepository: IJokeRepository = new JsonJokeRepository()) {}

    getJokes = async (category: string) => {
        const jokesList = await this.jokeRepository.findByCategory(category);

        return jokesList.map((item) => JokeMapper.toDTO(item));
    };
}
export { JokeService };
