const { Router } = require('express');
const virusModel = require('../models/virus');
const outbreaksModel = require('../models/outbreaks');
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


// get all the outbreak's of a virus
virusRouter.get('/:id/outbreaks', (req, res) => {

        outbreaksModel.find({virusCode : req.params.id})
        .then((listaSurtos) => {
            res.json(listaSurtos)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

});









module.exports = virusRouter;
