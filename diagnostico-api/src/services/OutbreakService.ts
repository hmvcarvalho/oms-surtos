import { OutbreakMapper } from '../mappers/OutbreakMapper';
import { HttpOutbreakRepository } from '../repository/http/HttpOutbreakRepository';
import IOutbreakRepository from '../repository/interfaces/IOutbreakRepository';
import IOutbreakService from './interfaces/IOutbreakService';

export class OutbreakService implements IOutbreakService {
    constructor(private outbreakRepo: IOutbreakRepository = new HttpOutbreakRepository()) {}

    getOutbreaksByZone = async (country: string) => {
        const outbreaksListDomain = await this.outbreakRepo.getOutbreaksByZone(country);
        return outbreaksListDomain.map((outbreak) => OutbreakMapper.toDTO(outbreak));
    };
}
