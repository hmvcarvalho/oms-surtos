const { Router } = require('express');
const geoZoneRouter = Router();
const { geoZoneValidatorSchema } = require('../validators/geoZoneValidator');
const validationErrorsMiddleware = require('../middlewares/validationErrorsMiddleware');
const { checkSchema } = require('express-validator');
const { listGeoZones, createGeoZone } = require('../services/geoZoneService');

// //create geoZone
geoZoneRouter.post('/', checkSchema(geoZoneValidatorSchema), validationErrorsMiddleware, (req, res) => {
    createGeoZone({ ...req.body })
        .then(() => res.status(201).json({ msg: 'GeoZone created with success' }))
        .catch((error) => res.status(400).json(error));
});

//get all geoZones
geoZoneRouter.get('/', (req, res) => {
    listGeoZones()
        .then((geoZonesList) => res.json(geoZonesList))
        .catch((error) => res.status(400).json(error));
});

module.exports = geoZoneRouter;
