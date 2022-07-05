import IOutbreakDTO from '../../dtos/IOutbreakDTO';

export default interface IOutbreakService {
    getOutbreaksByZone: (zone: string) => Promise<IOutbreakDTO[]>;
}
