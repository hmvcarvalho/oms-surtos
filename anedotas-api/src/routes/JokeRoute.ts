import { Router } from 'express';
import { JokeController } from '../controllers/JokeController';
import IJokeController from '../controllers/interfaces/IJokeController';

export class JokeRoute {
    constructor(private controller: IJokeController = new JokeController()) {}

    routes(app: Router) {
        app.post('api/joke', this.controller.post);
    }
}
