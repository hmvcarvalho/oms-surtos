import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT! || 3100;
app.listen(port, () => {
    console.log(`JOKES application is running on port ${port}.`);
});
