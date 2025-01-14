const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const httpErrors = require('http-errors');
require('dotenv').config();
// const Db = require('./models');
// const studentRoute = require('./routes/student.route');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
    res.status(200).json({ "message": "Welcome to RESTFul API Server" });
});

app.use(async (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: { "status": err.status, "message": err.message } });
});

// app.use('/api/student', studentRoute);

const HOST = process.env.HOST_NAME || 'localhost';
const PORT = process.env.PORT || 9999;

app.listen(PORT, HOST, async () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    // await Db.connect();
});
