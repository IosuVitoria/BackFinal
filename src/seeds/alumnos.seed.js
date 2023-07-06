const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Alumno = require("../api/models/alumno.model");

DB_URL = process.env.DB_URL;

const baseAlumnos = [
    
    {
        nombre: "Pepito",
        apellidos:"Garcia Gutierrez",
        Curso:"1A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Alberto Martinez",
        asignaturas:["64a70d0bbb3ddefea8973e27","64a70d0bbb3ddefea8973e28","64a70d0bbb3ddefea8973e29","64a70d0bbb3ddefea8973e2b","64a70d0bbb3ddefea8973e2c"],

        email:"pepito.garcia@colegio.com"
        
    },
    {
        nombre: "Lenguaje",
        profesor:["64a709bf060cfd0d2ca6ae2d"]
        
        
    },
    {
        nombre: "Sociales",
        profesor:["64a7026e0e6ea120aa93da03"]
        
    },
    {
        nombre: "Naturales",
        profesor:["64a7026e0e6ea120aa93da03"]
        
    },
    {
        nombre: "Etica",
        profesor:["64a7029d0e6ea120aa93da0b"]
        
    },
    {
        nombre: "Ingles",
        profesor:["64a7026e0e6ea120aa93da03"]
        
    },
    {
        nombre: "Frances",
        profesor:["64a709bf060cfd0d2ca6ae2d"]
        
    },
    {
        nombre: "Quimica",
        profesor:["64a702ae0e6ea120aa93da0f"]
        
    },
    {
        nombre: "Biologia",
        profesor:["64a702ae0e6ea120aa93da0f"]
        
    },
    {
        nombre: "Gimnasia",
        profesor:["64a7029d0e6ea120aa93da0b"]
        
    },
    {
        nombre: "Religion",
        profesor:["64a7029d0e6ea120aa93da0b"]
        
    },
    {
        nombre: "Filosofia",
        profesor:["64a7028b0e6ea120aa93da07"]
        
    },
    {
        nombre: "Informatica",
        profesor:["64a7026e0e6ea120aa93da03"]
        
    },
    {
        nombre: "Plastica",
        profesor:["64a7028b0e6ea120aa93da07"]
        
    },

    
];

mongoose.connect(DB_URL)

// comprueba si hay asignaturas y los borra !!!OJO!!!
.then (async () =>{
    const allAsignaturas = await Asignatura.find();
    if (allAsignaturas.length > 0){
        await Asignatura.collection.drop();
        console.log("Borrados todos los asignaturas")
    }

})
.catch((error => console.log("error borrando asignaturas", error)))

.then (async () =>{
    const asignaturasMap = baseAsignaturas.map((baseAsignatura) => new Asignatura(baseAsignatura))
    await Asignatura.insertMany(asignaturasMap);
    console.log("Asignaturas insertadas");
})
.catch((error => console.log("error insertando asignaturas", error)))

.finally(()=> mongoose.disconnect());