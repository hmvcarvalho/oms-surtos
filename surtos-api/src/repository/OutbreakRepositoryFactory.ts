import IOutbreakRepository from './interfaces/IOutbreakRepository';
import { MongoOutbreakRepository } from './mongo/MongoOutbreakRepository';
import { datasource } from '../app';

export class OutbreakRepositoryFactory {
    public static outbreakRepository(): IOutbreakRepository {
        switch (datasource.repository) {
            default:
                return new MongoOutbreakRepository();
        }
    }
}
