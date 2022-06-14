const outbreaksValidationSchema = {
    virusCode: { in: ['body'], notEmpty: true },
    geoCode: { in: ['body'], notEmpty: true },
    detDate: { in: ['body'], isISO8601: true, toDate: true, notEmpty: true },
    endDate: { in: ['body'], isISO8601: true, toDate: true },
};

module.exports = { outbreaksValidationSchema };
