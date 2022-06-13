const { Router } = require('express');
const countryModel = require('../models/country');
const countryDTO = require('../models/dtos/country/countryDTO');
const countryRouter = Router();

// //create country
countryRouter.post('/', (req, res) => {
    countryModel
        .create({ ...req.body })
        .then(() => {
            res.json({ msg: 'Country data inserted with success' });
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
countryRouter.put('/:code', (req, res) => {
    countryModel
        .findOneAndUpdate({ code: req.params.code }, { ...req.body }, { new: true })
        .then((updatedCountry)=>{
            res.json({msg : 'Country data updated with success'});
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//delete country
countryRouter.delete('/:code', (req, res)=>{
    countryModel
    .findOneAndDelete({ code: req.params.code })
    .then((deletedCountry)=>{
        res.json({msg : 'Country data deleted with success'});
    })
    .catch((error) => {
        res.status(400).json(error);
    });
});

//get country by id
countryRouter.get('/:code', (req, res)=>{
    countryModel
    .findOne({ code: req.params.code })
    .then((country)=>{
        const theCountryDTO = new countryDTO(country);
        res.json(theCountryDTO);
    })
    .catch(
        (error) => {
            res.status(400).json(error);
        });
});

module.exports = countryRouter;