import IOutbreakDTO from '../dtos/IOutbreakDTO';

interface IOutbreakService {
    createOutbreak(recDto: IOutbreakDTO): Promise<IOutbreakDTO>;

    updateOutbreak(
        virusCode: string,
        geoZoneCode: string,
        endDate: Date
    ): Promise<IOutbreakDTO>;

    getOutbreaksByVirusCode(virusCode: string): Promise<IOutbreakDTO[]>;
}

export { IOutbreakService };
