import { JokeDomain } from '../../domain/JokeDomain';
import IJokePersistence from '../../dataSchema/IJokePersistence';

export default interface IJokeRepository {
    findByCategory: (code: string) => Promise<JokeDomain[]>;
}
