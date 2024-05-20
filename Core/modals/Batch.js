const mongoose = require('mongoose');

const Batch = new mongoose.Schema({
    name: { type: String, required: false },
    operation: { type: String, required: false },
    amount: { type: String, required: false },
    batch: { type: String, required: false },
    comment: { type: String, required: false },
    dateAdded: { type: Date, required: false },
    finalAmount: { type: Number, required: false },
});

module.exports = mongoose.model('Batch', Batch);