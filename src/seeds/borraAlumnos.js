const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Alumno = require("../api/models/alumno.model");

DB_URL = process.env.DB_URL;



mongoose.connect(DB_URL)

// comprueba si hay alumnos y los borra !!!OJO!!!
.then (async () =>{
    const allAlumnos = await Alumno.find();
    if (allAlumnos.length > 0){
        await Alumno.collection.drop();
        console.log("Borrados todos los alumnos")
    }

})
.catch((error => console.log("error borrando alumnos", error)))



.finally(()=> mongoose.disconnect());
