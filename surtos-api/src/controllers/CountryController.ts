import { Request, Response, NextFunction } from 'express';
import ICountryController from './interfaces/ICountryController';
import { CountryService } from '../services/CountryService';
import { ICountryDTO } from '../dtos/ICountryDTO';
import { IRecommendationService } from '../services/interfaces/IRecommendationService';
import RecommendationService from '../services/RecommendationService';

class CountryController implements ICountryController {
    constructor(
        private countryService: CountryService = new CountryService(),
        private recommendationService: IRecommendationService = new RecommendationService()
    ) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const countryDto: ICountryDTO = req.body;
            const newCountry = await this.countryService.createService(countryDto);
            res.status(201).send(newCountry);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    getRecommendations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const countryCode = req.params.country_code;
            const recommendations = await this.recommendationService.getRecommendationsByCountryCode(countryCode);
            res.status(200).send(recommendations);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}
export { CountryController };
