const express = require('express');
const router = express.Router();

const Materials = require("../controllers/Materials");

router.get("/", async (req,res) => {
    try {
        const materials = await Materials.getAllMaterials();
        res.status(200).json(materials);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const newMaterial = await Materials.createMaterial(req.body);
        res.status(201).json(newMaterial);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});


router.delete("/:id", async(req, res) => {
    try {
        await Materials.deleteMaterial(req.params.id);
        res.status(200).json({id: req.params.id, message: "Deleted"});
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

router.put("/:id", async(req, res) => {
    try {
        const result = await Materials.updateMaterial(req.params.id, req.body);
        if (!result) {
            return res.status(404).json({ error: 'Material not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/getNames", async (req, res) => {
    try {
        const materials = await Materials.getAllMaterials();
        const names = materials.map(material => material.name);
        res.status(200).json(names);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

router.post("/getByName", async (req, res) => {
    try {
        const result = await Materials.getMaterialByName(req.body);
        res.status(201).json(result);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

// // Getting the Specific Admin
// router.get("/:id",Admin.getSpecificAdmin);

// // Deleting the Admin 


module.exports = router;