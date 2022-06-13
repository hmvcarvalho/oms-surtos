const { Router } = require('express');
const {
    createRecomendation,
    listRecomendations,
    getRecomendation,
    updateRecomendation,
    deleteRecomendation,
} = require('../services/recommendationService');

const recommendationRouter = Router();

recommendationRouter.get('/', (req, res) => {
    listRecomendations()
        .then((recommendations) => {
            res.json(recommendations);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});
recommendationRouter.post('/', (req, res) => {
    createRecomendation(req.body).then((recommendationDto) => res.status(201).json(recommendationDto));
});
recommendationRouter.get('/:id', (req, res) => {
    getRecomendation(req.params.id)
        .then((recommendationDto) => res.json(recommendationDto))
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});
recommendationRouter.put('/:id', (req, res) => {
    updateRecomendation(req.params.id, req.body).then((recommendationDto) => res.json(recommendationDto));
});

recommendationRouter.delete('/:id', (req, res) => {
    deleteRecomendation(req.params.id).then(() => res.status(204).end());
});

module.exports = { recommendationRouter };
