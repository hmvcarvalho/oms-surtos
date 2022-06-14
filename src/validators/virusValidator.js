const virusValidationSchema = {
    virus_cod: { in: ['body'], notEmpty: true, errorMessage: 'cod is wrong' },
    virus_nome: { in: ['body'], notEmpty: true, errorMessage: 'nome is wrong' },
};

module.exports = { virusValidationSchema };
