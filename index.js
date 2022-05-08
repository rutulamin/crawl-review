const express = require('express');
const app = express();
require('dotenv').config();

app.use('/', require('./modules/index'));

app.all('/*', (req, res) => {
    return res.status(404).json({
        errors: { msg: 'This is not a valid request' },
        status: false
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
});