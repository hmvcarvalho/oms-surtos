import { JokeDomain } from '../../domain/JokeDomain';

export default interface IJokeRepository {
    save: (joke: JokeDomain) => Promise<JokeDomain>;
    findAll: () => Promise<Array<JokeDomain>>;
    findById: (id: string) => Promise<JokeDomain>;
    deleteById: (id: string) => Promise<boolean>;
}
