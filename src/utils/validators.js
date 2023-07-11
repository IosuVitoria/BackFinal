const User = require("../api/models/user.model");
const Alumno = require("../api/models/alumno.model");
const Profesor = require("../api/models/profesor.model");

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    return regex.test(String(password));
}
const validarEmailRepetidoAlumno =async (email) => {
    const emailRepetido = await Alumno.find({ email: email });

    return emailRepetido.length;
}
const validarEmailRepetidoProfesor =async (email) => {
    const emailRepetido = await Profesor.find({ email: email });

    return emailRepetido.length;
}

const usedEmail = async(email) => {
    const users = await User.find({ email: email });
    console.log(users.length)
    return users.length;
}

const validateCurso = (curso)=>{
    const regex= /^[1-6][A-B]$/;
    
    return regex.test(String(curso));
}
const validateTelefono = (telefono)=>{
    const regex= /^[0-9]{9}$/;
    return regex.test(String(telefono));
}
const validateNota = (nota)=>{
    if (nota === 10){
        return true;
    }
    else{
        const regex=/^([0-9]{1}(\.[0-9]{1,2})?)$/;
        return regex.test(Number(nota));
    }
  
}

module.exports = { validatePassword, validateEmail,validarEmailRepetidoAlumno,validarEmailRepetidoProfesor, usedEmail,validateCurso,validateTelefono, validateNota }