import IJokeRepository from '../interface/IJokeRepository';
import { JokeDomain } from '../../domain/JokeDomain';
import IJokePersistence from '../../dataSchema/IJokePersistence';
import ICategoryRepository from '../interface/ICategoryRepository';
import { MongoCategoryRepository } from '../mongo/MongoCategoryRepository';
import fs from 'fs';
import { JokeMapper } from '../../mappers/JokeMapper';
const fsPromises = fs.promises;

export class JsonJokeRepository implements IJokeRepository {
    constructor(private categoryRepo: ICategoryRepository = new MongoCategoryRepository()) {}

    private readData = async (dbpath: string) => {
        try {
            return JSON.parse(await fsPromises.readFile(dbpath, 'utf8')) as IJokePersistence[];
        } catch (err) {
            console.error(err);
            return [];
        }
    };

    findByCategory = async (category: string) => {
        const theCategory = await this.categoryRepo.findById(category);
        if (theCategory) {
            const dbpath = theCategory.path;
            const data = await this.readData(dbpath);
            return data.map((item) => JokeMapper.toDomain(item));
        }
        throw "Couldn't find category";
    };
}
