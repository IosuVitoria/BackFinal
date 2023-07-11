const { deleteFile } = require('../../middlewares/delete.file');
const Profesor = require('../models/profesor.model');
const Asignatura = require('../models/asignatura.model');
const Aluno = require('../models/alumno.model');
const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const { validateEmail, validatePassword, usedEmail, validateCurso, validateTelefono,validarEmailRepetidoProfesor } = require("../../utils/validators");
const mailer = require("../../templates/registro");
const Alumno = require('../models/alumno.model');
const { json } = require('express');

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
            return res.status(404).json({message:`No existe profesor con id: ${id}`})
        }
        return res.status(200).json(profesorById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getProfesoresNotas = async (req, res)=>{
    try{
    const {id} = req.params;
    console.log(id);
    const allAsignaturas = await Asignatura.find();
    const allAlumnos = await Alumno.find();
    let asigProfe=[];
    let asigAlumnos={};
    let objectToReturn={
        idProfesor:id,
        asignatura:[]
    };
    //recorro todas las asignaturas
    for (let index = 0; index < allAsignaturas.length-1; index++) {
        //cada vuelta element es la asignatura
        const element = allAsignaturas[index];
        
        if (element.profesor[0].toString()=== id){
            for (let j = 0; j < allAlumnos.length-1; j++) {
                const alumno = allAlumnos[j];
                asigAlumnos={
                    asignatura:element._id.toString(),
                    nombre_asignatura:element.nombre,
                    alumnos:[]
                }
                
                
            }
            objectToReturn.asignatura.push(asigAlumnos)
        }
        
    }
   for (let index = 0; index < objectToReturn.asignatura.length-1; index++) {
    const element = objectToReturn.asignatura[index];
    allAlumnos.forEach(alumno => {
        let longitud=alumno.asignaturas.length;
        if (alumno.asignaturas.length===1){longitud=2}
        for (let j = 0; j < longitud-1; j++) {
            const asignatura = alumno.asignaturas[j].toString();
            if (element.asignatura === asignatura){
                element.alumnos.push(alumno._id.toString());
                break;
            }
        }
    });
   }
   
   
    return res.status(200).json(objectToReturn)
    } catch (error) {
        return res.status(500).json(error);
}
}

const postProfesores = async(req,res) => {
    try {
        const newProfesor = new Profesor(req.body);
        const newUser = new User();
       
        //validarEmail
        if(!validateEmail(newProfesor.email)){
            return res.status(400).json({message: "Email no valido"})
        }
        //validarTelefono
        if(!validateTelefono(newProfesor.telefono)){
            return res.status(400).json({message: "Telefono no valido"})
        }
        //validar Email repetido
        if(validarEmailRepetidoProfesor(newAlumno.email)){
            return res.status(400).json({message: "Email repetido"})
        }

        const createdProfesor = await newProfesor.save();
        newUser.email=newProfesor.email;
        newUser.password= newProfesor.nombre+"2023$";
        newUser.password=newUser.password.toUpperCase();
        newUser.role="profesor";

        const createdUser= await newUser.save();
        
        if (createdUser){
            
            mailer.enviarMailProfe(newProfesor, newUser);
            return res.status(201).json({"profesor":createdProfesor,"user":createdUser});
        }
        
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

        // valida si campo modificado es telefono que cumpla patron
        if (putProfesor.telefono){
            //validarTelefono
            if(!validateTelefono(putProfesor.telefono)){
                return res.status(400).json({message: "Telefono no valido"})
             }
        }
        //Valida campo email si existe en el body de la request
        if (putProfesor.email){
            //validarEmail
            if(!validateEmail(putProfesor.email)){
                return res.status(400).json({message: "Email no valido"})
            }
        }


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

module.exports = {getProfesores,getProfesorById,getProfesoresNotas, postProfesores, putProfesores, deleteProfesores}