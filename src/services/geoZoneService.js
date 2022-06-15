const geoZoneModel = require('../models/geoZone');
const geoZoneDTO = require('../models/dtos/geoZone/geoZoneDTO');

function listGeoZones() {
    return geoZoneModel.find().then((geoZonesList) => geoZonesList.map((geoZone) => new geoZoneDTO(geoZone)));
}

function createGeoZone(request) {
    return geoZoneModel.create({ ...request });
}

module.exports = {
    listGeoZones,
    createGeoZone,
};
