import { Virus } from '../domain/Virus';

export default interface IVirusRepository {
    create: (virus: Virus) => Promise<Virus>;
    findAll: () => Promise<Virus[]>;
    findById: (virusCode: string) => Promise<any>;
    deleteById: (virusCode: string) => Promise<boolean>;
}
