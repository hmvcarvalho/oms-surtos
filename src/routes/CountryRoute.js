const {Router} = require('express');
const countryModel = require('../models/country');
const countryDTO = require('..models/dtos/country');

//create country
Router.post('/', (req, res) =>{
    countryModel.create({...req.body})
    .then(()=>{
        res.json({msg : 'Country data inserted with success'});
    })
    .catch((error)=>{
        res.status(400).json(error);
    });
});

//get all countries
Router.get('/', (req,res)=>{
    countryModel.find({}, (error, countriesList)=>{
        if (error)
            return res.status(400).json(error);
        const countriesListDTO = countriesList.map((country) =>{
            return new countryDTO(country);
        });
    });
});