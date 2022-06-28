import { Outbreak } from '../domain/Outbreak';

export default interface IOutbreakRepository {
    create: (outbreak: Outbreak) => Promise<Outbreak>;
    update: (virusCode: string, geoZoneCode: string, endDate: Date) => Promise<Outbreak>;
    findByVirusCode: (virusCode: string) => Promise<Outbreak[]>;
}
