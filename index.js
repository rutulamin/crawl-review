const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use('/', require('./modules/index'));

app.all('/*', (req, res) => {
    return res.status(404).json({
        errors: { msg: 'This is not a valid request' },
        status: false
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});