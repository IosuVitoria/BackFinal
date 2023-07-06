const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Profesor = require("../api/models/profesor.model");

DB_URL = process.env.DB_URL;

const profesores = [
    
    {
        nombre: "Alberto",
        apellidos: "Martinez Diaz",
        email: "alberto@colegio.com",
        telefono: "666112233"
        
    },
    {
        nombre: "Roberto",
        apellidos: "Gutierrez Lopez",
        email: "roberto@colegio.com",
        telefono: "666445566"
        
    },
    {
        nombre: "Abel",
        apellidos: "Cabeza Roman",
        email: "abel@colegio.com",
        telefono: "666001144"
        
    },
    {
        nombre: "Jose",
        apellidos: "Diez Diaz",
        email: "jose@colegio.com",
        telefono: "666002255"
        
    },
    {
        nombre: "Rodrigo",
        apellidos: "Otro Perez",
        email: "rodrigo@colegio.com",
        telefono: "666112233"
        
    },
   
    
    
];

mongoose.connect(DB_URL)

// comprueba si hay alumnos y los borra !!!OJO!!!
.then (async () =>{
    const allAlumnos = await alumno.find();
    if (allAlumnos.length > 0){
        await alumno.collection.drop();
        console.log("Borrados todos los alumnos")
    }

})
.catch((error => console.log("error borrando alumnos", error)))

.then (async () =>{
    const alumnosMap = alumnos.map((alumn) => new alumno(alumn))
    await alumno.insertMany(alumnosMap);
    console.log("Alumnos insertados");
})
.catch((error => console.log("error insertando alumnos", error)))

.finally(()=> mongoose.disconnect());
