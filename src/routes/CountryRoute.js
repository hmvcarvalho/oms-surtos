const { Router } = require('express');
const countryModel = require('../models/country');
const geoZoneModel = require('../models/geoZone');
const countryDTO = require('../models/dtos/country/countryDTO');
const countryRouter = Router();

const { countryValidatorSchema } = require('../validators/countryValidator');
const validationErrorsMiddleware = require('../middlewares/validationErrorsMiddleware');
const { checkSchema } = require('express-validator');

// //create country
countryRouter.post('/', checkSchema(countryValidatorSchema), validationErrorsMiddleware, (req, res) => {
    geoZoneModel
        .find({ code: req.body.geoZoneCode })
        .then((theZone) => {
            countryModel
                .create({ code: req.body.code, name: req.body.name, geoZoneCode: theZone._id })
                .then(() => {
                    res.json({ msg: 'Country data inserted with success' });
                })
                .catch((error) => {
                    res.status(400).json(error);
                });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//get all countries
countryRouter.get('/', (req, res) => {
    countryModel
        .find({})
        .then((countriesList) => {
            const countriesListDTO = countriesList.map((country) => {
                return new countryDTO(country);
            });
            res.json(countriesListDTO);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//update country
countryRouter.put('/:code', checkSchema(countryValidatorSchema), validationErrorsMiddleware, (req, res) => {
    countryModel
        .findOneAndUpdate({ code: req.params.code }, { ...req.body }, { new: true })
        .then((updatedCountry) => {
            res.json({ msg: 'Country data updated with success' });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//delete country
countryRouter.delete('/:code', (req, res) => {
    countryModel
        .findOneAndDelete({ code: req.params.code })
        .then((deletedCountry) => {
            res.json({ msg: 'Country data deleted with success' });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//get country by id
countryRouter.get('/:code', (req, res) => {
    countryModel
        .findOne({ code: req.params.code })
        .then((country) => {
            const theCountryDTO = new countryDTO(country);
            res.json(theCountryDTO);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = countryRouter;
