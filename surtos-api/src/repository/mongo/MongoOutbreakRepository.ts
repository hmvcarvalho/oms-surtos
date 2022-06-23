import { Outbreak } from '../../domain/Outbreak';
import OutbreakSchema from '../../persistence/schemas/outbreakSchema';
import { OutbreakMapper } from '../../mappers/OutbreakMapper';
import IOutbreakRepository from '../IOutbreakRepository';

export class MongoOutbreakRepository implements IOutbreakRepository {
    constructor() {}

    async create(outbreak: Outbreak): Promise<Outbreak> {
        console.log(
            'MongoOutbreakRepository: save: ' + JSON.stringify(outbreak)
        );
        const outbreakPersistence = OutbreakMapper.toPersistence(outbreak);

        const outb = await OutbreakSchema.create(outbreakPersistence);
        console.log(outb);

        return OutbreakMapper.toDomain(outbreakPersistence);
    }

    async update(
        virusCode: string,
        geoZoneCode: string,
        endDate: Date
    ): Promise<Outbreak> {
        console.log(
            'MongoOutbreakRepository: save: ' +
                JSON.stringify({ virusCode, geoZoneCode, endDate })
        );

        const outb = await OutbreakSchema.findOneAndUpdate(
            { virusCode, geoZoneCode },
            { endDate },
            { new: true }
        );

        if (!outb) {
            throw new Error('Outbreak not found!');
        }

        return OutbreakMapper.toDomain(outb);
    }

    async findByVirusCode(virusCode: string): Promise<Outbreak[]> {
        console.log(
            'MongoOutbreakRepository: findById: ' + JSON.stringify(virusCode)
        );
        // filtrar todos os outbreaks por "virus"
        let result = await OutbreakSchema.find({ virusCode });
        // converter o outbreak de persistence em dominio
        return result.map((out) => OutbreakMapper.toDomain(out));
    }
}
