import { Request, Response, NextFunction } from 'express';
import IJokeController from './interfaces/IJokeController';
import { IJokeService } from '../services/interfaces/IJokeService';
import { JokeService } from '../services/JokeService';
import { IJokeDTO } from '../dtos/IJokeDTO';

class JokeController implements IJokeController {
    constructor(private jokeService: IJokeService = new JokeService()) {}

    getAllByCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const jokesList = await this.jokeService.getJokes(req.params.category);
            res.status(201).send(jokesList);
        } catch (err) {
            res.status(400).json(JSON.stringify(err));
        }
    };
}

export { JokeController };
