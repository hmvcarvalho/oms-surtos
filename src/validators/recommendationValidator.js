const recommendationValidationSchema = {
    recommendCode: { in: ['body'], notEmpty: true },
    geoZoneCode: { in: ['body'], notEmpty: true },
    date: { in: ['body'], isISO8601: true, toDate: true, notEmpty: true },
    validDays: {
        in: ['body'],
        isInt: true,
        toInt: true,
        notEmpty: true,
    },
};

module.exports = { recommendationValidationSchema };
