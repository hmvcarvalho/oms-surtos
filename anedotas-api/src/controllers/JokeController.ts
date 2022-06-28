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
            res.status(200).send('Joke created with sucess');
        } catch {
            res.status(400).json(JSON.stringify(Error));
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const jokeList = await this.jokeService.getAllJokes();
            res.status(200).send(jokeList);
        } catch (error) {
            res.status(400).json(JSON.stringify(Error));
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).send(await this.jokeService.getJokeById(req.params.id));
        } catch (error) {
            res.status(400).json(JSON.stringify(Error));
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            (await this.jokeService.deleteJoke(req.params.id))
                ? res.status(200).send(`Joke ${req.params.id} deleted with sucess`)
                : res.status(400).send(`Joke ${req.params.id} not found`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const jokeDTO: IJokeDTO = req.body;
            await this.jokeService.updateJoke(req.params.id, jokeDTO);
            res.status(200).send(`Joke with id : ${req.params.id} updated with success`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}

export { JokeController };
