import { JokeRoute } from './JokeRoute';
class Routes {
    private _joke: JokeRoute;

    constructor() {
        this._joke = new JokeRoute();
    }

    get joke(): JokeRoute {
        return this._joke;
    }
}

export default Routes;
