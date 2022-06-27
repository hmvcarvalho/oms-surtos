interface IRecommendationPersistance {
    recommendationCode: string;
    recommendationDate: Date;
    recommendationValidDays: number;
    geoZoneCode: string;
}

export { IRecommendationPersistance };
