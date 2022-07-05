import { Router } from 'express';
import { JokeController } from '../controllers/JokeController';
import IJokeController from '../controllers/interfaces/IJokeController';

export class JokeRoute {
    constructor(private controller: IJokeController = new JokeController()) {}

    routes(app: Router) {
        app.post('/api/joke', this.controller.post);
        app.get('/api/joke', this.controller.get);
        app.get('/api/joke/:id', this.controller.getById);
        app.delete('/api/joke/:id', this.controller.delete);
        app.put('/api/joke/:id', this.controller.put);
    }
}
