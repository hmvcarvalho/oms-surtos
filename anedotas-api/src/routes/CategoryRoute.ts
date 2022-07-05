import { Router } from 'express';
import { CategoryController } from '../controllers/CategoryController';
import ICategoryController from '../controllers/interfaces/ICategoryController';

export class CategoryRoute {
    constructor(private controller: ICategoryController = new CategoryController()) {}

    routes(app: Router) {
        app.post('/api/category', this.controller.post);
        app.get('/api/category', this.controller.get);
        app.get('/api/category/:id', this.controller.getById);
        app.delete('/api/category/:id', this.controller.delete);
        app.put('/api/category/:id', this.controller.put);
        //app.get('/api/category/:id', this.controller.getAllJokes);
    }
}
