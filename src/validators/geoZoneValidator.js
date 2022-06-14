const geoZoneValidatorSchema = {
    code: { in: ['body'], notEmpty: true },
    name: { in: ['body'], notEmpty: true },
};

module.exports = { geoZoneValidatorSchema };
