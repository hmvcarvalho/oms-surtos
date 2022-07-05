import { Router } from 'express';
import IJokeController from '../controllers/interfaces/IJokeController';
import { JokeController } from '../controllers/JokeController';

export class JokeRoute {
    constructor(private controller: IJokeController = new JokeController()) {}

    routes(app: Router) {
        app.get('/api/joke/:category', this.controller.getAllByCategory);
    }
}
