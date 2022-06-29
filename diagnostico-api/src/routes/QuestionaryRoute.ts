import { Router } from 'express';
import QuestionaryController from '../controllers/QuestionaryController';
import IQuestionaryController from '../controllers/interfaces/IQuestionaryController';
export class QuestionaryRoute {
    constructor(private controller: IQuestionaryController = new QuestionaryController()) {}

    routes(app: Router) {
        app.post('/api/questionary', this.controller.post);
        app.get('/api/questionary', this.controller.get);
        app.get('/api/questionary/:id', this.controller.getById);
        app.put('/api/questionary/:id', this.controller.update);
        app.delete('/api/questionary/:id', this.controller.delete);
    }
}
