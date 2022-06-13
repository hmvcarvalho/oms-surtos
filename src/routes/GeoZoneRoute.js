const { Router } = require('express');
const geoZoneModel = require('../models/geoZone');
const geoZoneDTO = require('../models/dtos/geoZone/geoZoneDTO');
const geoZoneRouter = Router();

// //create geoZone
geoZoneRouter.post('/', (req, res) => {
    geoZoneModel
        .create({ ...req.body })
        .then(() => {
            res.json({ msg: 'GeoZone data inserted with success' });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//get all geoZones
geoZoneRouter.get('/', (req, res) => {
    geoZoneModel
        .find({})
        .then((geoZoneList) => {
            const geoZoneListDTO = geoZoneList.map((geoZone) => {
                return new geoZoneDTO(geoZone);
            });
            res.json(geoZoneListDTO);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = geoZoneRouter;