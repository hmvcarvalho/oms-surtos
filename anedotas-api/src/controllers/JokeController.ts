import { Request, Response, NextFunction } from 'express';
import { IJokeDTO } from '../dtos/IJokeDTO';
import IJokeController from './interfaces/IJokeController';
import { IJokeService } from '../services/interfaces/IJokeService';
import JokeService from '../services/JokeService';

class JokeController implements IJokeController {
    constructor(private jokeService: IJokeService = new JokeService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const jokeDto: IJokeDTO = req.body;
            const newJoke = await this.jokeService.createJoke(jokeDto);
            res.status(201).send('Joke created with sucess');
        } catch {
            res.json(JSON.stringify(Error));
        }
    };
}

export { JokeController };
