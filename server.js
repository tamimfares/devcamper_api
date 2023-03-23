const express = require('express');
const dotevn = require('dotenv');

// Load env vars
dotevn.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
});
