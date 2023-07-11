const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Alumno = require("../api/models/alumno.model");
const ciclo1 = ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d"];
const ciclo2 = ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d","64ad4cbf26a02b802810572e"];
const ciclo3= ["64ad4cbf26a02b8028105721","64ad4cbf26a02b8028105722","64ad4cbf26a02b8028105723","64ad4cbf26a02b8028105724","64ad4cbf26a02b8028105726","64ad4cbf26a02b802810572a","64ad4cbf26a02b802810572b","64ad4cbf26a02b802810572d","64ad4cbf26a02b8028105727","64ad4cbf26a02b8028105725"];


DB_URL = process.env.DB_URL;

const baseAlumnos = [
    
    {
        nombre: "Pepito",
        apellidos:"Garcia Gutierrez",
        Curso:"1A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Alberto Martinez",
        email:"pepito.garcia@colegio.com"
        
    },
    {
        nombre: "Manolito",
        apellidos:"Perez Estandia",
        Curso:"1A",
        tutor1:"Manuel Perez",
        tutor2:"Lucia Estandia",
        tutorCurso:"Alberto Martinez",
        email:"manolito.perez@colegio.com"
        
    },
    {
        nombre: "Juanita",
        apellidos:"Sevilla Fournier",
        Curso:"1A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Alberto Martinez",
        email:"juanita.sevilla@colegio.com"
        
    },
    {
        nombre: "Ricardo",
        apellidos:"Laguardia Alonso",
        Curso:"1A",
        tutor1:"Jose Laguardia",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Alberto Martinez",
        email:"ricardo.laguardia@colegio.com"
        
    },
    {
        nombre: "Pepito",
        apellidos:"Garcia Gutierrez",
        Curso:"1A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Alberto Martinez",
        email:"pepito.garcia@colegio.com"
        
    },
    {
        nombre: "Valeria",
        apellidos:"Angulo Jimenez",
        Curso:"1A",
        tutor1:"Rodrigo Angulo",
        tutor2:"Aurora Jimenez",
        tutorCurso:"Alberto Martinez",
        email:"valeria.angulo@colegio.com"
        
    },




    {
        nombre: "Lucio",
        apellidos:"Garcia Gutierrez",
        Curso:"1B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Roberto Gutierrez",
        email:"lucio.garcia@colegio.com"
        
    },
    {
        nombre: "Jesus",
        apellidos:"Vario Gonzalez",
        Curso:"1B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Roberto Gutierrez",
        email:"jesus.vario@colegio.com"
        
    },
    {
        nombre: "Noelia",
        apellidos:"Alonso Fournier",
        Curso:"1B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Roberto Gutierrez",
        email:"noelia.alonso@colegio.com"
        
    },
    {
        nombre: "Martin",
        apellidos:"Encina Alonso",
        Curso:"1B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Roberto Gutierrez",
        email:"martin.encina@colegio.com"
        
    },
    {
        nombre: "Juan",
        apellidos:"Abascal Cabon",
        Curso:"1B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Roberto Gutierrez",
        email:"juan.abascal@colegio.com"
        
    },
    {
        nombre: "Leoncia",
        apellidos:"Torral Blue",
        Curso:"1B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Roberto Gutierrez",
        email:"leoncia.torral@colegio.com"
        
    },



    {
        nombre: "Carlos",
        apellidos:"Biena Gutierrez",
        Curso:"2A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Jose Diaz",
        email:"carlos.biena@colegio.com"
        
    },
    {
        nombre: "Manuelita",
        apellidos:"Curiel Lopez",
        Curso:"2A",
        tutor1:"Martin Curiel",
        tutor2:"",
        tutorCurso:"Abel Cabeza",
        email:"manuelita.curiel@colegio.com"
        
    },
    {
        nombre: "Lorenzo",
        apellidos:"Sevilla Fournier",
        Curso:"2A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Abel Cabeza",
        email:"lorenzo.sevilla@colegio.com"
        
    },
    {
        nombre: "Walter",
        apellidos:"Ezequiel Alonso",
        Curso:"2A",
        tutor1:"Jose Ezequiel",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Abel Cabeza",
        email:"walter.ezequiel@colegio.com"
        
    },
    {
        nombre: "Pepita",
        apellidos:"Garcia Gutierrez",
        Curso:"2A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Abel Cabeza",
        email:"pepita.garcia@colegio.com"
        
    },
    {
        nombre: "Juan",
        apellidos:"Sordo Jimenez",
        Curso:"2A",
        tutor1:"Raul Sordo",
        tutor2:"",
        tutorCurso:"Abel Cabeza",
        email:"juan.sordo@colegio.com"
        
    },




    {
        nombre: "Luciana",
        apellidos:"Garcia Gutierrez",
        Curso:"2B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Santiago Ferreiras",
        email:"luciana.garcia@colegio.com"
        
    },
    {
        nombre: "Jesusa",
        apellidos:"Vario Gonzalez",
        Curso:"2B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Santiago Ferreiras",
        email:"jesusa.vario@colegio.com"
        
    },
    {
        nombre: "Noel",
        apellidos:"Alonso Fournier",
        Curso:"2B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Santiago Ferreiras",
        email:"noel.alonso@colegio.com"
        
    },
    {
        nombre: "Martina",
        apellidos:"Encinas Alonso",
        Curso:"2B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Santiago Ferreiras",
        email:"martina.encina@colegio.com"
        
    },
    {
        nombre: "Eneko",
        apellidos:"Abascal Cabon",
        Curso:"2B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Santiago Ferreiras",
        email:"eneko.abascal@colegio.com"
        
    },
    {
        nombre: "Leonardo",
        apellidos:"Torral Blue",
        Curso:"2B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Santiago Ferreiras",
        email:"leonardo.torral@colegio.com"
        
    },




    {
        nombre: "Carlota",
        apellidos:"Biena Gutierrez",
        Curso:"3A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Jose Diaz",
        email:"carlota.biena@colegio.com"
        
    },
    {
        nombre: "Coral",
        apellidos:"Curiel Lopez",
        Curso:"3A",
        tutor1:"Martin Curiel",
        tutor2:"",
        tutorCurso:"Jose Diaz",
        email:"coral.curiel@colegio.com"
        
    },
    {
        nombre: "Benigno",
        apellidos:"Sevilla Fournier",
        Curso:"3A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Jose Diaz",
        email:"benigno.sevilla@colegio.com"
        
    },
    {
        nombre: "Luis",
        apellidos:"Ezequiel Alonso",
        Curso:"3A",
        tutor1:"Jose Ezequiel",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Jose Diaz",
        email:"luis.ezequiel@colegio.com"
        
    },
    {
        nombre: "Diego",
        apellidos:"Garcia Gutierrez",
        Curso:"3A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Jose Diaz",
        email:"diego.garcia@colegio.com"
        
    },
    {
        nombre: "Juan Antonio",
        apellidos:"Sordo Vaigas",
        Curso:"3A",
        tutor1:"Raul Sordo",
        tutor2:"",
        tutorCurso:"Jose Diaz",
        email:"juanantonio.sordo@colegio.com"
        
    },




    {
        nombre: "Luis Mariano",
        apellidos:"Garcia Gutierrez",
        Curso:"3B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Rodrigo Angulo",
        email:"luismariano.garcia@colegio.com"
        
    },
    {
        nombre: "Angel",
        apellidos:"Vario Gonzalez",
        Curso:"3B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Rodrigo Angulo",
        email:"angel.vario@colegio.com"
        
    },
    {
        nombre: "Nurber",
        apellidos:"Alonso Fournier",
        Curso:"3B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Rodrigo Angulo",
        email:"nurber.alonso@colegio.com"
        
    },
    {
        nombre: "Susana",
        apellidos:"Zapata Alonso",
        Curso:"3B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Rodrigo Angulo",
        email:"susana.zapata@colegio.com"
        
    },
    {
        nombre: "Aritz",
        apellidos:"Abascal Cabon",
        Curso:"3B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Rodrigo Angulo",
        email:"aritz.abascal@colegio.com"
        
    },
    {
        nombre: "Maria",
        apellidos:"Diego Blue",
        Curso:"3B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Rodrigo Angulo",
        email:"maria.diego@colegio.com"
        
    },
   
    
    {
        nombre: "Carlotas",
        apellidos:"Biena Gutierrez",
        Curso:"4A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Iosu Gomez",
        email:"carlotas.biena@colegio.com"
        
    },
    {
        nombre: "Coralina",
        apellidos:"Curiel Lopez",
        Curso:"4A",
        tutor1:"Martin Curiel",
        tutor2:"",
        tutorCurso:"Iosu Gomez",
        email:"coralina.curiel@colegio.com"
        
    },
    {
        nombre: "Bueno",
        apellidos:"Sevilla Fournier",
        Curso:"4A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Iosu Gomez",
        email:"bueno.sevilla@colegio.com"
        
    },
    {
        nombre: "Luis Angel",
        apellidos:"Ezequiel Alonso",
        Curso:"4A",
        tutor1:"Jose Ezequiel",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Iosu Gomez",
        email:"luisangel.ezequiel@colegio.com"
        
    },
    {
        nombre: "Diego",
        apellidos:"Lazaro Gutierrez",
        Curso:"4A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Iosu Gomez",
        email:"diego.lazaro@colegio.com"
        
    },
    {
        nombre: "Anton",
        apellidos:"Sordo Vargas",
        Curso:"4A",
        tutor1:"Raul Sordo",
        tutor2:"",
        tutorCurso:"Iosu Gomez",
        email:"anton.sordo@colegio.com"
        
    },




    {
        nombre: "Mariano",
        apellidos:"Gomez Gutierrez",
        Curso:"4B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Martin Encina",
        email:"mariano.gomez@colegio.com"
        
    },
    {
        nombre: "Angelica",
        apellidos:"Vario Gonzalez",
        Curso:"4B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Martin Encina",
        email:"angelica.vario@colegio.com"
        
    },
    {
        nombre: "Roberto",
        apellidos:"Alonso Fournier",
        Curso:"4B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Martin Encina",
        email:"roberto.alonso@colegio.com"
        
    },
    {
        nombre: "Sergio",
        apellidos:"Zapata Alonso",
        Curso:"4B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Martin Encina",
        email:"sergio.zapata@colegio.com"
        
    },
    {
        nombre: "Andres",
        apellidos:"Abascal Cabon",
        Curso:"4B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Martin Encina",
        email:"andres.abascal@colegio.com"
        
    },
    {
        nombre: "Marta",
        apellidos:"Diego Blue",
        Curso:"4B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Martin Encina",
        email:"marta.diego@colegio.com"
        
    },


    {
        nombre: "Leon",
        apellidos:"Biena Gutierrez",
        Curso:"5A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Natalia Moreno",
        email:"leon.biena@colegio.com"
        
    },
    {
        nombre: "Cierro",
        apellidos:"Curiel Lopez",
        Curso:"5A",
        tutor1:"Martin Curiel",
        tutor2:"",
        tutorCurso:"Natalia Moreno",
        email:"cierro.curiel@colegio.com"
        
    },
    {
        nombre: "Buenaventura",
        apellidos:"Espada Fournier",
        Curso:"5A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Natalia Moreno",
        email:"buenaventura.espada@colegio.com"
        
    },
    {
        nombre: "Ernesto",
        apellidos:"Alonso",
        Curso:"5A",
        tutor1:"Jose Ezequiel",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Natalia Moreno",
        email:"ernesto.alonso@colegio.com"
        
    },
    {
        nombre: "Dieguito",
        apellidos:"Lazaro Gutierrez",
        Curso:"5A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Natalia Moreno",
        email:"dieguito.lazaro@colegio.com"
        
    },
    {
        nombre: "Victoria",
        apellidos:"Sintal Vargas",
        Curso:"5A",
        tutor1:"Raul Sordo",
        tutor2:"",
        tutorCurso:"Natalia Moreno",
        email:"victoria.sintal@colegio.com"
        
    },




    {
        nombre: "Murcia",
        apellidos:"Gomez Gutierrez",
        Curso:"5B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Vero Moreno",
        email:"murcia.gomez@colegio.com"
        
    },
    {
        nombre: "Angeles",
        apellidos:"Vario Gonzalez",
        Curso:"5B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Vero Moreno",
        email:"angeles.vario@colegio.com"
        
    },
    {
        nombre: "Rodolfo",
        apellidos:"Alonso Fournier",
        Curso:"5B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Vero Moreno",
        email:"rodolfo.alonso@colegio.com"
        
    },
    {
        nombre: "Sergio Luis",
        apellidos:"Zapata Alonso",
        Curso:"5B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Vero Moreno",
        email:"sergioluis.zapata@colegio.com"
        
    },
    {
        nombre: "Moises",
        apellidos:"Carretero Cabon",
        Curso:"5B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Vero Moreno",
        email:"moises.carretero@colegio.com"
        
    },
    {
        nombre: "Miguel",
        apellidos:"Bose Blue",
        Curso:"5B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Vero Moreno",
        email:"miguel.bose@colegio.com"
        
    },


    {
        nombre: "Mujica",
        apellidos:"Gutierrez Gutierrez",
        Curso:"6A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Sergio Pitel",
        email:"mujica.gutierrez@colegio.com"
        
    },
    {
        nombre: "Gustavo",
        apellidos:"Curiel Lopez",
        Curso:"6A",
        tutor1:"Martin Curiel",
        tutor2:"",
        tutorCurso:"Sergio Pitel",
        email:"gustavo.curiel@colegio.com"
        
    },
    {
        nombre: "Cristian",
        apellidos:"Espada Fournier",
        Curso:"6A",
        tutor1:"David Sevilla Valdemoro",
        tutor2:"",
        tutorCurso:"Sergio Pitel",
        email:"cristian.espada@colegio.com"
        
    },
    {
        nombre: "Daniela",
        apellidos:"Alonso",
        Curso:"6A",
        tutor1:"Jose Ezequiel",
        tutor2:"Vanesa Alonso",
        tutorCurso:"Sergio Pitel",
        email:"daniela.alonso@colegio.com"
        
    },
    {
        nombre: "Carolina",
        apellidos:"Montserrat Gutierrez",
        Curso:"6A",
        tutor1:"Pepe Garcia",
        tutor2:"Maria Gutierrez",
        tutorCurso:"Sergio Pitel",
        email:"carolina.montserrat@colegio.com"
        
    },
    {
        nombre: "Xavi",
        apellidos:"Sintal Mejias",
        Curso:"6A",
        tutor1:"Raul Sordo",
        tutor2:"",
        tutorCurso:"Sergio Pitel",
        email:"xavi.sintal@colegio.com"
        
    },




    {
        nombre: "Muriel",
        apellidos:"Campos Gutierrez",
        Curso:"6B",
        tutor1:"Lucas Garcia",
        tutor2:"Sonia Gutierrez",
        tutorCurso:"Jaime Carretero",
        email:"muriel.campos@colegio.com"
        
    },
    {
        nombre: "Genoveva",
        apellidos:"Vario Gonzalez",
        Curso:"6B",
        tutor1:"Manuel Vario",
        tutor2:"Vicenta Gonzalez",
        tutorCurso:"Jaime Carretero",
        email:"genoveva.vario@colegio.com"
        
    },
    {
        nombre: "Mar",
        apellidos:"Guzman Fournier",
        Curso:"6B",
        tutor1:"David Alonso Valdemoro",
        tutor2:"",
        tutorCurso:"Jaime Carretero",
        email:"mar.guzman@colegio.com"
        
    },
    {
        nombre: "Jaimita",
        apellidos:"Zapata Alonso",
        Curso:"6B",
        tutor1:"Lucas Encina",
        tutor2:"Gloria Alonso",
        tutorCurso:"Jaime Carretero",
        email:"jaimita.zapata@colegio.com"
        
    },
    {
        nombre: "Ruben",
        apellidos:"Carbon Cabon",
        Curso:"6B",
        tutor1:"Pepe Abascal",
        tutor2:"Maria Cabon",
        tutorCurso:"Jaime Carretero",
        email:"ruebn.carbon@colegio.com"
        
    },
    {
        nombre: "Heraclio",
        apellidos:"Fournier Blue",
        Curso:"6B",
        tutor1:"Cancel Flores",
        tutor2:"",
        tutorCurso:"Jaime Carretero",
        email:"heraclio.fournier@colegio.com"
        
    }









    
];

mongoose.connect(DB_URL)

// comprueba si hay asignaturas y los borra !!!OJO!!!
.then (async () =>{
    const allAlumnos = await Alumno.find();
    if (allAlumnos.length > 0){
        await Alumno.collection.drop();
        console.log("Borrados todos los alumnos")
    }

})
.catch((error => console.log("error borrando alumnos", error)))

.then (async () =>{
    const alumnosMap = baseAlumnos.map((baseAlumno) => new Alumno(baseAlumno))
    alumnosMap.forEach(alumno => {
        console.log(alumno.Curso);
        if (alumno.Curso.toUpperCase() === "1A" || alumno.Curso.toUpperCase() === "1B"||alumno.Curso.toUpperCase() ===  "2A"|| alumno.Curso.toUpperCase() === "2B"){
            alumno.asignaturas=ciclo1;
        }
        else if(alumno.Curso.toUpperCase() === "3A" ||alumno.Curso.toUpperCase() ===  "3B"|| alumno.Curso.toUpperCase() === "4A"|| alumno.Curso.toUpperCase() === "4B"){
            alumno.asignaturas=ciclo2;
        }
        else{
            alumno.asignaturas=ciclo3;
        }
        
    });
    await Alumno.insertMany(alumnosMap);
    console.log("Alumnos insertados");
})
.catch((error => console.log("error insertando alumnos", error)))

.finally(()=> mongoose.disconnect());