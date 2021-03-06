const express = require('express');
let { connect, connection } = require('mongoose');
const { recommendationRouter } = require('./routes/recommendationRoute');
require('dotenv').config();

const port = process.env.PORT || 3000;

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

Promise = global.Promise;

app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// routes
const outbreaksRoutes = require("./routes/outbreaksRoutes");
app.use("/api/outbreaks", outbreaksRoutes);
app.use('/recommendation', recommendationRouter);


connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});

const countryRoutes = require('./routes/countryRoute');
app.use('/api/country', countryRoutes);

const geoZoneRoutes = require('./routes/geoZoneRoute');
app.use('/api/geoZone', geoZoneRoutes);


// routes virus

const virusRoutes = require('./routes/VirusRoute');
app.use('/api/virus', virusRoutes);
