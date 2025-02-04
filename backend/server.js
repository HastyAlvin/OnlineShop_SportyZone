const connectDB = require('./database'); 
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const httpErrors = require('http-errors');
require('dotenv').config();

// Gọi router
const userRoutes = require('./routers/userRouter.js');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


// API
app.use('/api', userRoutes); 

app.get('/', async (req, res, next) => {
    res.status(200).json({ "message": "Welcome to RESTFul API Server" });
});

app.use(async (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: { "status": err.status, "message": err.message } });
});

const HOST = process.env.HOST_NAME || 'localhost';
const PORT = process.env.PORT || 9999;

// Kết nối MongoDB
connectDB();

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
