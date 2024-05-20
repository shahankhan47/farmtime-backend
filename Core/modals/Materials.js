const mongoose = require('mongoose');

const Materials = new mongoose.Schema({
    name: { type: String, required: false },
    unit: { type: String, required: false },
    amount: { type: Number, required: false },
});

module.exports = mongoose.model('Materials', Materials);