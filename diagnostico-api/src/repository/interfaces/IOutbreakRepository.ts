import { Outbreak } from '../../domain/Outbreak';

export default interface IOutbreakRepository {
    getOutbreaksByZone: (zone: string) => Promise<Outbreak[]>;
}
