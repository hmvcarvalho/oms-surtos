const { Router } = require('express');
const countryModel = require('../models/country');
const geoZoneModel = require('../models/geoZone');
const outbreaksModel = require('../models/outbreaks');
const { listRecomemendationsByCountry } = require('../services/recommendationService');

const countryDTO = require('../models/dtos/country/countryDTO');
const countryRouter = Router();
const {
    listCountries,
    createCountry,
    updateCountry,
    deleteCountry,
    getCountry,
} = require('../services/countryService');

const { countryValidatorSchema } = require('../validators/countryValidator');
const validationErrorsMiddleware = require('../middlewares/validationErrorsMiddleware');
const { checkSchema } = require('express-validator');
const { find } = require('../models/country');

// //create country
countryRouter.post('/', checkSchema(countryValidatorSchema), validationErrorsMiddleware, (req, res) => {
    return createCountry(req.body)
        .then(() => res.status(201).json({ msg: 'Country created with success' }))
        .catch((error) => res.status(400).json(error));
});

//get all countries
countryRouter.get('/', (req, res) => {
    return listCountries()
        .then((countriesList) => res.json(countriesList))
        .catch((error) => res.status(400).json(error));
});

//update country
countryRouter.put('/:code', checkSchema(countryValidatorSchema), validationErrorsMiddleware, (req, res) => {
    return updateCountry({ ...req.body })
        .then(() => res.json({ msg: 'Country data updated with success' }))
        .catch((error) => res.status(400).json(error));
});

//delete country
countryRouter.delete('/:code', (req, res) => {
    return deleteCountry({ ...req.body })
        .then(() => res.json({ msg: 'Country data deleted with success' }))
        .catch((error) => res.status(400).json(error));
});

//get country by id
countryRouter.get('/:code', (req, res) => {
    return getCountry({ ...req.params })
        .then((country) => res.json(country))
        .catch((error) => res.status(400).json(error));
});

//get recs by country by id
countryRouter.get('/:id/recomendacoes', (req, res) => {
    listRecomemendationsByCountry(req.params.id).then((recommendations) => res.json(recommendations));
});

//api/country/{code}/outbreaks - o Obter os surtos ativos para o país referido
countryRouter.get('/:code/outbreaks', (req, res) => {
    countryModel
        .findOne({ code: req.params.code })
        .then(({ geoZoneCode }) => {
            outbreaksModel
                .find({ geoCode: geoZoneCode })
                .then((countriesList) => {
                    res.json(countriesList);
                })
                .catch((error) => {
                    res.status(400).json(error);
                });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = countryRouter;
