'use strict'

const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

this.enviarMail = (newAlumno,newUser,newTutor) =>{
   
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    }); 

    let mailOptions={
        from:"Administrador",
        to:"rodri2.papi@gmail.com",
        subject:"datos de usuario para acceso a aplicacion del colegio",
        html:`<h2>Datos del alumno ${newAlumno.nombre} ${newAlumno.apellidos}</h2>
        <h4>Usuario generado para alumno:</h4>
        <p>email: ${newUser.email}</p>
        <p>password: ${newUser.password}</p>
        <p>role: ${newUser.role}</p>
        <br>
        <h4>Usuario generado para tutor:</h4>
        <p>email: ${newTutor.email}</p>
        <p>password: ${newTutor.password}</p>
        <p>role: ${newTutor.role}</p><br>
        <p>En el primer acceso a la aplicacion del colegio se requerira cambiar la contraseña</p>
        
        `
    };
    transporter.sendMail(mailOptions,(error, info)=>{
        if (error){
            console.log(error);
        }
        else{
            console.log('el correo se envio correctamente'+info.response); 
        }
    });

    

};

this.enviarMailProfe = (newProfesor,newUser) =>{
    console.log("entro post");
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    }); 

    let mailOptions={
        from:"Administrador",
        to:"rodri2.papi@gmail.com",
        subject:"datos de usuario para acceso a aplicacion del colegio",
        html:`<h2>Datos del profesor ${newProfesor.nombre} ${newProfesor.apellidos}</h2>
        <h4>Usuario generado:</h4>
        <p>email: ${newUser.email}</p>
        <p>password: ${newUser.password}</p>
        <p>role: ${newUser.role}</p>
        <br>
        
        <p>En el primer acceso a la aplicacion del colegio se requerira cambiar la contraseña</p>
        
        `
    };
    transporter.sendMail(mailOptions,(error, info)=>{
        if (error){
            console.log(error);
        }
        else{
            console.log('el correo se envio correctamente'+info.response); 
        }
    });

    

};

module.exports = this;