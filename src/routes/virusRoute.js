const { Router } = require('express');
const virus = require('../models/virus');
const virusModel = require('../models/virus');
const virusRouter = Router();
// criar DTO depois de a BD estar funcional


virusRouter.post('/', (req, res) => {

    virusModel.create({...req.body})
        .then(() => {
            res.json({ msg: 'Virus was inserted with success' });
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

virusRouter.get()

module.exports = virusRouter;
