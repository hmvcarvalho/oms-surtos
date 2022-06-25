import { ICountryDTO } from '../dtos/ICountryDTO';

export default interface ICountryService {
    createService: (countryDto: ICountryDTO) => Promise<ICountryDTO>;
}
