import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import IUserController from '../controllers/interfaces/IUserController';

export class UserRoute {
    constructor(private controller: IUserController = new UserController()) {}

    routes(app: Router) {
        app.post('/api/login', this.controller.post);
    }
}
