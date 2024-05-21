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

const getBatchRecords = async () => {
    try {
        const records = await Batch.aggregate([
            {
                $sort: {
                  dateAdded: -1
                }
            },
            {
              $group: {
                _id: "$batch",
                date: {$first: "$dateAdded"},
                total: {$sum: 1},
                materials: {
                  $push: {
                    id: "$_id",
                    name: "$name",
                    operation: "$operation",
                    initialAmount: "$amount",
                    finalAmount: "$finalAmount",
                    comment: "$comment",
                    dateAdded: "$dateAdded"
                  }
                }
              }
            },
            {
                $project: {
                  _id:1,
                  date: {"$dateToString": { "format": "%d/%m/%Y", "date": "$date" }},
                  total:1,
                  materials:1
                }
            }
        ])
        return records;
    } catch(error) {
        return error.message;
    }
}

module.exports = {
    createBatchRecord,
    getBatchRecords
}