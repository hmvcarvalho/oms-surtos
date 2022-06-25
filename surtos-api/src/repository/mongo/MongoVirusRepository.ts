import { IVirusPersistence } from '../../dataSchema/IVirusPresistence';
import { Virus } from '../../domain/Virus';
import { VirusMapper } from '../../mappers/VirusMapper';
import virusSchema from '../../persistence/schemas/virusSchema';
import IVirusRepository from '../IVirusRepository';

export class MongoVirusRepository implements IVirusRepository {
    create = async (virus: Virus): Promise<Virus> => {
        console.log('MongoVirusRepository : create ' + JSON.stringify(virus));

        try {
            // convert to persistence
            let virusPersistence: IVirusPersistence =
                VirusMapper.toPersistence(virus);

            let result: IVirusPersistence = await virusSchema.create(
                virusPersistence
            );
            return VirusMapper.toDomain(result);
        } catch (error) {
            throw error;
        }
    };

    update = async (id: string, virus: Virus) => {
        return {} as Virus;
    };

    deleteById = async (id: string) => {
        return false;
    };

    findById = async (id: string) => {
        return {} as Virus;
    };

    findAll = async () => {
        try {
            let result: IVirusPersistence[] = await virusSchema.find();
            return result.map((virusList) => VirusMapper.toDomain(virusList));
        } catch (error) {
            throw error;
        }
    };
}
