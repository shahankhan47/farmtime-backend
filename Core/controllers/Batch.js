const Batch = require('../modals/Batch');

const createBatchRecord = async (data) => {
    try {
        data.dateAdded = new Date();
        const newBatchRecord = new Batch(data);
        return await newBatchRecord.save();
    }
    catch(error) {
        return error.message;
    }
}

module.exports = {
    createBatchRecord
}