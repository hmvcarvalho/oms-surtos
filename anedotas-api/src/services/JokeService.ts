import { IJokeDTO } from '../dtos/IJokeDTO';
import { JokeMapper } from '../mappers/JokeMapper';
import { IJokeService } from './interfaces/IJokeService';
import IJokeRepository from '../repository/interface/IJokeRepository';
import { MongoJokeRepository } from '../repository/mongo/MongoJokeRepository';

export default class JokeService implements IJokeService {
    constructor(private jokeRepository: IJokeRepository = new MongoJokeRepository()) {}

    async createJoke(jokeDto: IJokeDTO): Promise<IJokeDTO> {
        const jokeDom = JokeMapper.toDomain(jokeDto);
        return JokeMapper.toDTO(await this.jokeRepository.save(jokeDom));
    }

    async updateJoke(id: string, jokeDTo: IJokeDTO) {
        return {} as IJokeDTO;
    }

    async deleteJoke(id: string) {
        return {} as Boolean;
    }

    async getJokeById(id: string) {
        return {} as IJokeDTO;
    }

    async getAllJokes() {
        return {} as IJokeDTO[];
    }
}
