require('dotenv').config()
const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');


app.use(compression());
app.use(cors());

const consumerRouter = require('./routes/meter');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', consumerRouter);


// catch 404 and forward to error handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route Not Found' });
});

// error handler
app.use((err, req, res) => {
    res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(5500, () => {
    console.log('listening from meter server')
})

module.exports = app;
