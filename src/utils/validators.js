const User = require("../api/models/user.model");

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    return regex.test(String(password));
}

const usedEmail = async(email) => {
    const users = await User.find({ email: email });
    console.log(users.length)
    return users.length;
}

const validateCurso = (curso)=>{
    const regex= /^[1-6A-F]{2}$/;
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

module.exports = { validatePassword, validateEmail, usedEmail,validateCurso,validateTelefono, validateNota }