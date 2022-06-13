const { recommendationRouter } = require('./recommendationRoute');

module.exports = (app) => {
    app.use('/recommendation', recommendationRouter);
};
