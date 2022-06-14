const countryValidatorSchema = {
    code: { in: ['body'], notEmpty: true },
    name: { in: ['body'], notEmpty: true },
    geoZoneCode: { in: ['body'], notEmpty: true },
};

module.exports = { countryValidatorSchema };
