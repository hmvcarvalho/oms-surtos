const { RecommendationModel } = require('../models/recommendationModel');
const CountryModel = require('../models/country');

function listRecomendations() {
    return RecommendationModel.find().then((recommendations) => {
        return Promise.all(recommendations.map((r)=> r.populate('geoZoneCode')));
    });
}

function createRecomendation(recommendationReq) {
    return RecommendationModel.create({ ...recommendationReq }).then((recommendation) => {
        return recommendation;
    });
}

function getRecomendation(id) {
    return RecommendationModel.findById(id).then((recommendation) => {
        return recommendation;
    });
}

function updateRecomendation(id, recommendationReq) {
    return RecommendationModel.findByIdAndUpdate(id, { ...recommendationReq }).then((recommendation) => {
        return recommendation;
    });
}

function deleteRecomendation(id) {
    return RecommendationModel.deleteOne(id);
}

function listRecomemendationsByCountry(countryID) {
    return CountryModel.findOne({ code: countryID }).then(({ zoneCode }) => {
        return RecommendationModel.find({ geoZoneCode: zoneCode }).then((recommendations) => {
            return recommendations;
        });
    });
}

module.exports = {
    createRecomendation,
    listRecomendations,
    getRecomendation,
    updateRecomendation,
    deleteRecomendation,
    listRecomemendationsByCountry,
};
