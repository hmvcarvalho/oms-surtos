import express, { Application, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes/Routes';

export class App {
    public app: Application = express();
    public routes: Routes = new Routes();
    public mongoUrl: string = `${process.env.MONGO_URI || ''}${process.env.MONGO_DATABASE || ''}${
        process.env.MONGO_OPTIONS || ''
    }`;

    constructor() {
        console.log(this.mongoUrl);
        this.config();
        this.mongoSetup();
        this.routes.doctor.routes(this.app);
        this.routes.questionary.routes(this.app);
        this.app.use('/api', (_, res: Response) => res.json({ message: 'Status up' }));
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(
            () => console.log('connected to database'),
            () => console.error('Connection failed')
        );
    }
}

export const datasource = {
    repository: 'mongo',
};

export default new App().app;
