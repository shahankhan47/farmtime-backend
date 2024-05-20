const express = require("express");

const app = express();

const materials = require('./Materials');
const batch = require('./Batch');

app.use('/material', materials);
app.use('/batch', batch);

module.exports = app;
