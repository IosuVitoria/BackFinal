const { deleteFile } = require('../../middlewares/delete.file');
const { validateEmail, validatePassword, usedEmail, validateCurso, validateNota } = require("../../utils/validators");
const Nota = require('../models/nota.model');
const Alumno = require('../models/alumno.model');
const Asignatura = require('../models/asignatura.model');

const bcrypt = require("bcrypt");


const getNotas = async(req,res) => {
    try {
        // const allNotas = await Nota.find().populate("titulos", "titulo genero tipo");
        const allNotas = await Nota.find();
        return res.status(200).json(allNotas);
    } catch (error) {
        return res.status(500).json(error)
    }
}

// get de un nota por id
const getNotaById = async (req, res)=>{
    try {
        const {id} = req.params;
        const notaById = await Nota.find({_id: id});
        if (!notaById){
            return res.status(404).json({message:`No existe nota con id: ${id}`})
        }
        return res.status(200).json(notaById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getNotaByAlumno = async (req, res)=>{
    try {
        const {id} = req.params;
        const NotaByAlumno = await Nota.find({alumno: id});
        // if (!notaById){
        //     return res.status(404).json({message:`No existe nota con id: ${id}`})
        // }
        return res.status(200).json(NotaByAlumno);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postNotas = async(req,res) => {
    try {
        const newNota = new Nota(req.body);
        if(!validateNota(newNota.nota)){
            return res.status(400).json({message: "Nota no valida"})
        }
        const createdNota = await newNota.save();
       

       

        return res.status(201).json({"nota":createdNota});
    } catch (error) {
        return res.status(500).json(error)
    }

}
const insertNotas = async (req, res) => {
   
    try {
        const allNotas = await Nota.find();
        if (allNotas.length > 0){
            await Nota.collection.drop();
        console.log("Borrados todas las notas")
        }
        const allAsignaturas = await Asignatura.find();
        const allAlumnos = await Alumno.find();
        
        allAlumnos.forEach(alumno => {
            
            for (let index = 0; index < (alumno.asignaturas.length -1); index++) {

                let asignatura = alumno.asignaturas[index];
              
                let calificacion=parseFloat(Math.random()*10).toFixed(2);
                
                const notatosave = new Nota();
                notatosave.asignatura=asignatura;
                notatosave.nota=calificacion;
                notatosave.alumno=alumno._id;
               
                console.log(notatosave);
                
                const savedNota=  notatosave.save();
                console.log(savedNota);
            }

            
        });
        return res.status(201).json({"message":"notas creadas"});
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putNotas = async(req,res) => {
    console.log(req.body)
    
    try {
        const {id} = req.params;
        console.log(id);
        const notatoupdate = await Nota.findById(id);
        console.log(notatoupdate);
        const {nota} = req.body
        notatoupdate.nota = nota;
       

        


        const updatedNota = await Nota.findByIdAndUpdate(id, notatoupdate)
        if(!updatedNota){
            return res.status(404).json({message: "El id de este nota no existe"});
        }
    
        return res.status(200).json(notatoupdate);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteNotas = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedNota = await Nota.findByIdAndDelete(id);
        if(!deletedNota){
            return res.status(404).json({message: "El id del nota no existe"});
        }
        return res.status(200).json(deletedNota)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getNotas,getNotaById,getNotaByAlumno, postNotas,insertNotas, putNotas, deleteNotas}