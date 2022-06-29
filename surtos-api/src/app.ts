import express, { Application } from 'express';
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
        this.config();
        this.mongoSetup();
        this.routes.recommendation.routes(this.app);
        this.routes.outbreak.routes(this.app);
        this.routes.geoZone.routes(this.app);
        this.routes.country.routes(this.app);
        this.routes.virus.routes(this.app);
        console.log(this.mongoUrl);
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(
            () => console.log('Connected to database'),
            () => console.error('Connection failed')
        );
    }
}

export const datasource = {
    repository: 'mongo',
};

export default new App().app;
