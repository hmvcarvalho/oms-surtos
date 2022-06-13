const { RecommendationModel } = require('../models/recommendationModel');

function listRecomendations() {
    return RecommendationModel.find().then((recommendations) => {
        return recommendations;
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

module.exports = {
    createRecomendation,
    listRecomendations,
    getRecomendation,
    updateRecomendation,
    deleteRecomendation,
};
