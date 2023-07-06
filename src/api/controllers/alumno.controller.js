const { deleteFile } = require('../../middlewares/delete.file');
const Alumno = require('../models/alumno.model');
const User = require('../models/user.model');
const bcrypt = require("bcrypt");

const getAlumnos = async(req,res) => {
    try {
        // const allAlumnos = await Alumno.find().populate("titulos", "titulo genero tipo");
        const allAlumnos = await Alumno.find();
        return res.status(200).json(allAlumnos);
    } catch (error) {
        return res.status(500).json(error)
    }
}

// get de un alumno por id
const getAlumnoById = async (req, res)=>{
    try {
        const {id} = req.params;
        const alumnoById = await Alumno.find({_id: id});
        if (!alumnoById){
            return res.status(500).json({message:`No existe alumno con id: ${id}`})
        }
        return res.status(200).json(alumnoById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postAlumnos = async(req,res) => {
    try {
        const newAlumno = new Alumno(req.body);
        const newUser = new User();
        // console.log(req.files)
        // if(req.files.foto){
        //     newAlumno.foto = req.files.foto[0].path
        // }
        // if(req.files.foto2){
        //     newAlumno.foto2 = req.files.foto2[0].path
        // }
        const createdAlumno = await newAlumno.save();
        console.log(createdAlumno);

        //let newpass= parseInt(Math.random() * 100);
       
        newUser.email=newAlumno.email;
        newUser.password=newAlumno.nombre+newAlumno.Curso+"$";
        newUser.role="alumno";
        
        const createdUser= await newUser.save();
        return res.status(201).json({"alumno":createdAlumno,"user":createdUser});
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putAlumnos = async(req,res) => {
    console.log(req.body)
    console.log(req.files)
    try {
        const {id} = req.params;
        const putAlumno = new Alumno(req.body);
        putAlumno._id = id;
        
        // if(req.files.foto){
        //     putAlumno.foto = req.files.foto[0].path
        // }
        // if(req.files.foto2){
        //     putAlumno.foto2 = req.files.foto2[0].path
        // }
        const updatedAlumno = await Alumno.findByIdAndUpdate(id, putAlumno)
        if(!updatedAlumno){
            return res.status(404).json({message: "El id de este alumno no existe"});
        }
        
        if(updatedAlumno.foto !== putAlumno.foto){
            deleteFile(updatedAlumno.foto);
        }
        if(updatedAlumno.foto2 !== putAlumno.foto2){
            deleteFile(updatedAlumno.foto2);
        }
       
        return res.status(200).json(putAlumno);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAlumnos = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedAlumno = await Alumno.findByIdAndDelete(id);
        if(!deletedAlumno){
            return res.status(404).json({message: "El id del alumno no existe"});
        }
        return res.status(200).json(deletedAlumno)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getAlumnos,getAlumnoById, postAlumnos, putAlumnos, deleteAlumnos}