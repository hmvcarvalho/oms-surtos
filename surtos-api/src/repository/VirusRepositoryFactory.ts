import IVirusRepository from './interfaces/IVirusRepository';
import { datasource } from '../app';
import { MongoVirusRepository } from './mongo/MongoVirusRepository';

export class VirusRepositoryFactory {
    public static virusRepository(): IVirusRepository {
        switch (datasource.repository) {
            default:
                return new MongoVirusRepository();
        }
    }
}
