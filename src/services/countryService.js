const countryModel = require('../models/country');
const geoZoneModel = require('../models/geoZone');
const countryDTO = require('../models/dtos/country/countryDTO');

function listCountries() {
    return countryModel.find().then((countriesList) => countriesList.map((country) => new countryDTO(country)));
}

function createCountry({ geoZoneCode, code, name }) {
    return geoZoneModel
        .findOne({ code: geoZoneCode })
        .then((theZone) => countryModel.create({ code: code, name: name, geoZoneCode: theZone._id }));
}

function updateCountry({ geoZoneCode, code, name }) {
    return geoZoneModel
        .findOne({ code: geoZoneCode })
        .then((theZone) =>
            countryModel.findOneAndUpdate({ code: code }, { code: code, name: name, geoZoneCode: theZone._id })
        );
}

function deleteCountry({ code }) {
    return countryModel.findOneAndDelete(code);
}

function getCountry({ code }) {
    return countryModel.findOne({ code: code }).then((theCountry) => new countryDTO(theCountry));
}

module.exports = {
    listCountries,
    createCountry,
    updateCountry,
    deleteCountry,
    getCountry,
};
