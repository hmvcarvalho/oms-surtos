import axios from 'axios';
import { IOutbreakPersistence } from '../../dataSchema/IOutbreakPersistence';
import { OutbreakMapper } from '../../mappers/OutbreakMapper';
import IOutbreakRepository from '../interfaces/IOutbreakRepository';

export class HttpOutbreakRepository implements IOutbreakRepository {
    constructor(private httpRequest = axios) {}

    getOutbreaksByZone = async (country: string) => {
        const outbreaksList: IOutbreakPersistence[] = await this.httpRequest.get(
            process.env.OUTBREAK_URL + '/api/country/:country/outbreak',
            {
                params: {
                    country: country,
                },
            }
        );

        return outbreaksList.map((outbreak) => OutbreakMapper.toDomain(outbreak));
    };
}
