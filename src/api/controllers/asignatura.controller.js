const { deleteFile } = require('../../middlewares/delete.file');
const Asignatura = require('../models/asignatura.model');

const getAsignaturas = async(req,res) => {
    try {
        // const allAsignaturas = await Asignatura.find().populate("titulos", "titulo genero tipo");
        const allAsignaturas = await Asignatura.find();
        return res.status(200).json(allAsignaturas);
    } catch (error) {
        return res.status(500).json(error)
    }
}

// get de un asignatura por id
const getAsignaturaById = async (req, res)=>{
    try {
        const {id} = req.params;
        const asignaturaById = await Asignatura.find({_id: id});
        if (!asignaturaById){
            return res.status(500).json({message:`No existe asignatura con id: ${id}`})
        }
        return res.status(200).json(asignaturaById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postAsignaturas = async(req,res) => {
    try {
        const newAsignatura = new Asignatura(req.body);
        console.log(req.files)
      
        const createdAsignatura = await newAsignatura.save();
        return res.status(201).json(createdAsignatura);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putAsignaturas = async(req,res) => {
    console.log(req.body)
    console.log(req.files)
    try {
        const {id} = req.params;
        const putAsignatura = new Asignatura(req.body);
        putAsignatura._id = id;
        
      
        const updatedAsignatura = await Asignatura.findByIdAndUpdate(id, putAsignatura)
        if(!updatedAsignatura){
            return res.status(404).json({message: "El id de este asignatura no existe"});
        }
        
        if(updatedAsignatura.foto !== putAsignatura.foto){
            deleteFile(updatedAsignatura.foto);
        }
        if(updatedAsignatura.foto2 !== putAsignatura.foto2){
            deleteFile(updatedAsignatura.foto2);
        }
        return res.status(200).json(putAsignatura);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAsignaturas = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedAsignatura = await Asignatura.findByIdAndDelete(id);
        if(!deletedAsignatura){
            return res.status(404).json({message: "El id del asignatura no existe"});
        }
        return res.status(200).json(deletedAsignatura)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getAsignaturas,getAsignaturaById, postAsignaturas, putAsignaturas, deleteAsignaturas}