const express = require('express');
let { connect, Promise, connection } = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

Promise = global.Promise;

app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});

const countryRoutes = require('./routes/CountryRoute');
app.use('/api/country', countryRoutes);

const geoZoneRoutes = require('./routes/GeoZoneRoute');
app.use('/api/geoZone', geoZoneRoutes);
