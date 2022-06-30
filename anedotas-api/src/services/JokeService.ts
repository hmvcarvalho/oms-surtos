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

    async updateJoke(id: string, jokeDto: IJokeDTO) {
        const jokeDom = JokeMapper.toDomain({ ...jokeDto });
        return JokeMapper.toDTO(await this.jokeRepository.save(jokeDom));

        // return JokerMapper.toDTO(await jokeRepository.save(JokeDom));
    }

    async deleteJoke(id: string): Promise<boolean> {
        return await this.jokeRepository.deleteById(id);
    }

    async getJokeById(id: string): Promise<IJokeDTO | null> {
        return JokeMapper.toDTO(await this.jokeRepository.findById(id));
    }

    async getAllJokes(): Promise<IJokeDTO[]> {
        const jokeDomList = await this.jokeRepository.findAll();
        return jokeDomList.map((x) => JokeMapper.toDTO(x));
    }
}
