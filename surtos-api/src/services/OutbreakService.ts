import IOutbreakDTO from '../dtos/IOutbreakDTO';
import { OutbreakMapper } from '../mappers/OutbreakMapper';
import IOutbreakRepository from '../repository/IOutbreakRepository';
import { OutbreakRepositoryFactory } from '../repository/OutbreakRepositoryFactory';
import { IOutbreakService } from './IOutbreakService';

class OutbreakService implements IOutbreakService {
    constructor(private outbreakRepository: IOutbreakRepository = OutbreakRepositoryFactory.outbreakRepository()) {}

    async createOutbreak(recDto: IOutbreakDTO): Promise<IOutbreakDTO> {
        // converter o argumento recDto para dominio
        const outbreakDom = OutbreakMapper.toDomain(recDto);
        // chamar o repositorio para criar na bd
        const result = await this.outbreakRepository.create(outbreakDom);
        // converter para DTO e retornar
        return OutbreakMapper.toDTO(result);
    }

    async updateOutbreak(virusCode: string, geoZoneCode: string, endDate: Date): Promise<IOutbreakDTO> {
        // chamar o repositorio para criar na bd (await)
        const result = await this.outbreakRepository.update(virusCode, geoZoneCode, endDate);
        // converter para DTO e retornar
        return OutbreakMapper.toDTO(result);
    }

    async getOutbreaksByVirusCode(virusCode: string): Promise<IOutbreakDTO[]> {
        // chamar repositorio filtrado por "virus" (await)
        const result = await this.outbreakRepository.findByVirusCode(virusCode);
        // mapear o array de dominio para dto e retornar
        return result.map((out) => OutbreakMapper.toDTO(out));
    }
}

export { OutbreakService };
