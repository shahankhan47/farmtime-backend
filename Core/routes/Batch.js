const express = require('express');
const router = express.Router();

const Batch = require("../controllers/Batch");

router.post("/", async (req, res) => {
    try {
        const newBatchRecord = await Batch.createBatchRecord(req.body);
        res.status(201).json(newBatchRecord);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

router.get("/", async (req, res) => {
    try {
        const records = await Batch.getBatchRecords();
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

module.exports = router;