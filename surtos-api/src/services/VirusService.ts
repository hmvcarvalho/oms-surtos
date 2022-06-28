import IVirusRepository from '../repository/interfaces/IVirusRepository';
import { VirusRepositoryFactory } from '../repository/VirusRepositoryFactory';
import { Virus } from '../domain/Virus';
import { IVirusDTO } from '../dtos/IVirusDTO';
import { VirusMapper } from '../mappers/VirusMapper';

export class VirusService {
    private repository: IVirusRepository;

    constructor() {
        this.repository = VirusRepositoryFactory.virusRepository();
    }

    async getAllVirus() {
        console.log('VirusService: getAllVirus');

        let result: Virus[] = await this.repository.findAll();
        let virusList: IVirusDTO[] = result.map((virusList) => VirusMapper.toDto(virusList));
        return virusList;
    }

    async createVirus(virusDTO: IVirusDTO) {
        console.log('VirusService : createVirus' + JSON.stringify(virusDTO));
        //mapp from DTO -> Domain
        let virusDomain: Virus = VirusMapper.toDomain(virusDTO);
        // call Virusrepository
        let result: Virus = await this.repository.create(virusDomain);
    }
}
