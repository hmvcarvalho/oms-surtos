import { Request, Response, NextFunction } from 'express';
import ICountryController from './ICountryController';
import { CountryService } from '../services/CountryService';
import { ICountryDTO } from '../dtos/ICountryDTO';
import { OutbreakService } from '../services/OutbreakService';

class CountryController implements ICountryController {
    constructor(private countryService: CountryService = new CountryService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const countryDto: ICountryDTO = req.body;
            const newCountry = await this.countryService.createService(countryDto);
            res.status(201).send('Success creating country');
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}
export { CountryController };
