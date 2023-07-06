const { deleteFile } = require('../../middlewares/delete.file');
const Profesor = require('../models/profesor.model');

const getProfesores = async(req,res) => {
    try {
        // const allProfesores = await Profesor.find().populate("titulos", "titulo genero tipo");
        const allProfesores = await Profesor.find();
        return res.status(200).json(allProfesores);
    } catch (error) {
        return res.status(500).json(error)
    }
}

// get de un profesor por id
const getProfesorById = async (req, res)=>{
    try {
        const {id} = req.params;
        const profesorById = await Profesor.find({_id: id});
        if (!profesorById){
            return res.status(500).json({message:`No existe profesor con id: ${id}`})
        }
        return res.status(200).json(profesorById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postProfesores = async(req,res) => {
    try {
        const newProfesor = new Profesor(req.body);
        console.log(req.files)
        // if(req.files.foto){
        //     newProfesor.foto = req.files.foto[0].path
        // }
        // if(req.files.foto2){
        //     newProfesor.foto2 = req.files.foto2[0].path
        // }
        const createdProfesor = await newProfesor.save();
        return res.status(201).json(createdProfesor);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putProfesores = async(req,res) => {
    console.log(req.body)
    console.log(req.files)
    try {
        const {id} = req.params;
        const putProfesor = new Profesor(req.body);
        putProfesor._id = id;
        
        // if(req.files.foto){
        //     putProfesor.foto = req.files.foto[0].path
        // }
        // if(req.files.foto2){
        //     putProfesor.foto2 = req.files.foto2[0].path
        // }
        const updatedProfesor = await Profesor.findByIdAndUpdate(id, putProfesor)
        if(!updatedProfesor){
            return res.status(404).json({message: "El id de este profesor no existe"});
        }
        
        if(updatedProfesor.foto !== putProfesor.foto){
            deleteFile(updatedProfesor.foto);
        }
        if(updatedProfesor.foto2 !== putProfesor.foto2){
            deleteFile(updatedProfesor.foto2);
        }
        return res.status(200).json(putProfesor);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteProfesores = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedProfesor = await Profesor.findByIdAndDelete(id);
        if(!deletedProfesor){
            return res.status(404).json({message: "El id del profesor no existe"});
        }
        return res.status(200).json(deletedProfesor)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getProfesores,getProfesorById, postProfesores, putProfesores, deleteProfesores}