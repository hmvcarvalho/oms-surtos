import { IVirusDTO } from '../dtos/IVirusDTO';
export default interface IVirusService {
    getAllVirus(): Promise<IVirusDTO>;
    getVirusById(x: IVirusDTO): Promise<IVirusDTO>;
    updateVirus(x: IVirusDTO): Promise<IVirusDTO>;
    deleteVirus(x: IVirusDTO): Promise<IVirusDTO>;
}
