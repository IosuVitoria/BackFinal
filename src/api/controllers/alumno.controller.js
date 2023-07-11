const { deleteFile } = require('../../middlewares/delete.file');
const { validateEmail, validatePassword, usedEmail, validateCurso,validarEmailRepetidoAlumno } = require("../../utils/validators");
const Alumno = require('../models/alumno.model');
const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const mailer = require("../../templates/registro");


 
  
const getAlumnos = async(req,res) => {
 
    try {
        // const allAlumnos = await Alumno.find().populate("titulos", "titulo genero tipo");
        const allAlumnos = await Alumno.find();
        return res.status(200).json(allAlumnos);
    } catch (error) {
        return res.status(500).json(error)
    }
}

//GET PAGINADO
const getAlumnosPaged = async(req,res) => {
    try {
        //Recoger querys de numero de pagina(page) y limite por pagina(limit)
        let {page, limit} = req.query;
        
        //Contar el numero de elementos en mi coleccion
        const numAlumnos = await Alumno.countDocuments();
        
        //Si no está seteado seteo el limite a 10
        limit = limit ? parseInt(limit) || 10 : 10;

        //Comprobar el numero máximo de paginas dependiendo de mi limite
        let numPages = numAlumnos%limit > 0 ? numAlumnos/limit + 1 : numAlumnos/limit;

        //Si no está seteado seteo el numero de pagina a 1
        page = page > numPages ? numPages : page < 1 ? 1 :  parseInt(page) || 1;
       
        // Calculo el salto(skip) que tengo que dar a mi find para empezar a partir del elemento que quiero
        const skip = (page - 1) * limit;

        const allAlumnos = await Alumno.find().skip(skip).limit(limit);
        const response = {
            info: {
                numAlumnos: numAlumnos,
                page: page,
                limit: limit,
                nextPage: numPages >= page + 1 ? `/alumno?page=${page + 1}&limit=${limit}` : null,
                previousPage: page != 1 ? `/alumno?page=${page - 1}&limit=${limit}` : null
            },
            results: allAlumnos
        }
        return res.status(200).json(response);
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
// get de un alumno por id
const getAlumnoByCurso = async (req, res)=>{
    try {
        const {curso} = req.params;
        const alumnoByCurso = await Alumno.find({Curso: curso});
        if (!alumnoByCurso){
            return res.status(500).json({message:`No existen alumnos con curso: ${curso}`})
        }
        return res.status(200).json(alumnoByCurso);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postAlumnos = async(req,res) => {
    try {
        const ciclo1 = ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d"];
        const ciclo2 = ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d","64ad4cbf26a02b802810572e"];
        const ciclo3= ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d","64ad4cbf26a02b8028105727","64ad4cbf26a02b8028105725"];
        const newAlumno = new Alumno(req.body);
        const newUser = new User();
        const newTutor = new User();
        newAlumno.Curso=newAlumno.Curso.toUpperCase();

        //Valida campo curso
        if (!validateCurso(newAlumno.Curso)){

            return res.status(400).json({message:"Curso no pasa validacion. ej: 1B"});
        }
        //validarEmail
        if(!validateEmail(newAlumno.email)){
            return res.status(400).json({message: "Email no valido"})
        }
        //validar Email repetido
        if(!validarEmailRepetidoAlumno(newAlumno.email)){
            return res.status(400).json({message: "Email repetido"})
        }
        
        // carga array de asignaturas segun el curso introducido
        if (newAlumno.Curso.toUpperCase() === "1A" || newAlumno.Curso.toUpperCase() === "1B"||newAlumno.Curso.toUpperCase() ===  "2A"|| newAlumno.Curso.toUpperCase() === "2B"){
            
            newAlumno.asignaturas=ciclo1;
        }
        else if(newAlumno.Curso.toUpperCase() === "3A" ||newAlumno.Curso.toUpperCase() ===  "3B"|| newAlumno.Curso.toUpperCase() === "4A"|| newAlumno.Curso.toUpperCase() === "4B"){
            newAlumno.asignaturas=ciclo2;
        }



                                         
        else{
            newAlumno.asignaturas=ciclo3;
        }
        //console.log("estoy antes cargar asignaturas " + newAlumno.Curso);
       const createdAlumno = await newAlumno.save();
        //console.log(newAlumno);

       
       
        newUser.email=newAlumno.email;
        newUser.password= newAlumno.nombre+newAlumno.Curso+"$";
        newUser.password=newUser.password.toUpperCase();
        newUser.role="alumno";
        
        newTutor.email=newAlumno.email;
        newTutor.password= newAlumno.tutor1+newAlumno.Curso+"$";
        newTutor.password=newTutor.password.toUpperCase();
        newTutor.role="tutor";

        
        const createdUser= await newUser.save();
        const createdTutor= await newTutor.save();


        
        if (createdUser || createdTutor){
            mailer.enviarMail(newAlumno, newUser,newTutor);
            return res.status(201).json({"alumno":createdAlumno,"user":createdUser,"tutor":createdTutor});
        }
        
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putAlumnos = async(req,res) => {
    // console.log(req.body)
    // console.log(req.files)
    try {
        const {id} = req.params;
        
        const dataAlumno = await Alumno.findById(id);
        const asigAlumno = dataAlumno.asignaturas;
        const putAlumno = new Alumno(req.body);
        putAlumno._id = id;
        
        // if(req.files.foto){
        //     putAlumno.foto = req.files.foto[0].path
        // }
        // if(req.files.foto2){
        //     putAlumno.foto2 = req.files.foto2[0].path
        // }


        //Valida campo curso si existe en el body de la request
        if (putAlumno.Curso){
            putAlumno.Curso=putAlumno.Curso.toUpperCase();
            if (!validateCurso(putAlumno.Curso)){
                return res.status(400).json({message:"Curso no pasa validacion. ej: 1B"});
            }
        }
        //Valida campo email si existe en el body de la request
        if (putAlumno.email){
            //validarEmail
            if(!validateEmail(putAlumno.email)){
                return res.status(400).json({message: "Email no valido"})
            }
        }
        if (putAlumno.asignaturas.length == 0){
            putAlumno.asignaturas=asigAlumno;
        }

        console.log(putAlumno);
        const updatedAlumno = await Alumno.findByIdAndUpdate(id, putAlumno)
        if(!updatedAlumno){
            return res.status(404).json({message: "El id de este alumno no existe"});
        }
        
        // if(updatedAlumno.foto !== putAlumno.foto){
        //     deleteFile(updatedAlumno.foto);
        // }
        // if(updatedAlumno.foto2 !== putAlumno.foto2){
        //     deleteFile(updatedAlumno.foto2);
        // }
       
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

module.exports = {getAlumnos,getAlumnoById,getAlumnoByCurso, getAlumnosPaged, postAlumnos, putAlumnos, deleteAlumnos}