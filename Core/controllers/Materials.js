const Materials = require('../modals/Materials');

const createMaterial = async (data) => {
    try {
        const newMaterial = new Materials(data);
        await newMaterial.save();
        return newMaterial;
    }
    catch(error) {
        return error.message;
    }
}

const getAllMaterials = async () => {
    try {
        const materials = await Materials.find();
        return materials;
    }
    catch(error) {
        return error.message;
    }
}

const deleteMaterial = async (id) => {
    try {
        await Materials.findByIdAndDelete(id);
    }
    catch(error) {
        return error.message;
    }
}

const updateMaterial = async (id, data) => {
    try {
        const updatedMaterial = await Materials.findByIdAndUpdate(id, data,
            { new: true } // To return the updated document
        );
        return updatedMaterial;
    } catch (error) {
        return error.message;
    }
};

const getMaterialByName = async (query) => {
    try {
        const materials = await Materials.findOne(query);
        return materials;
    }
    catch(error) {
        return error.message;
    }
}

// // Getting the Specific Admin by Id 
// const getSpecificAdmin = async (req,res) => {
//     try {
//         const admin = await Admin.findById(req.params.id);
//         res.status(200).json(admin);
//     }
//     catch(error) {
//         res.status(400).json({error:error.message});
//     }
// }

module.exports = { 
    createMaterial,
    getAllMaterials,
    deleteMaterial,
    updateMaterial,
    getMaterialByName
}