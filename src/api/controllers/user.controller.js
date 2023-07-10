const { generateSign } = require("../../utils/jwt");
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validators");
const Alumno = require("../models/alumno.model");
const Profesor = require("../models/profesor.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async(req, res) => {
    try {
        let userInfo;
        let entidad;
        if (req.body.role === "admin" || req.body.role === "profesor"){
            userInfo = await User.findOne({email: req.body.email});
        }
        else{
            console.log(req.body.role);
            userInfo = await User.find({email: req.body.email}); 
            if(userInfo.length === 0){
                
                return res.status(404).json({message: 'Email no registrado en BBDD'});
                
            }
            console.log(userInfo);

            if (userInfo[0].role === "profesor" || userInfo[0].role === "admin"){
                return res.status(404).json({message: 'No coincide el role introducido con el registrado en BBDD'});
            }
            if (req.body.role === userInfo[0].role){
                userInfo=userInfo[0];
            }
            else{
                userInfo=userInfo[1];
            }
           
            }
            
            
            if(!userInfo){
                
                return res.status(404).json({message: 'Email no registrado en BBDD'});
                //return res.status(404).json({message: 'Email no registrado en BBDD'});
            }
            if (req.body.role !== userInfo.role){
                      
                return res.status(404).json({message: 'No coincide el role introducido con el registrado en BBDD'});
            }
            
            if (userInfo.isLogged == false ){
                if (req.body.password !== userInfo.password){
                    return res.status(401).json({message:"Password incorrecta",user:userInfo});
                }
                else{
                 return res.status(401).json({message:"Debe cambiar contraseña es el primer login",user:userInfo});
                }
            }
            
            else{
                   
                if(!bcrypt.compareSync(req.body.password, userInfo.password)){
                    return res.status(404).json({message: 'Password incorrecta'});
                }
                const token = generateSign(userInfo._id, userInfo.email);
                if (userInfo.role === "profesor"){
                    entidad= await Profesor.find({email: userInfo.email});
                    entidad=entidad[0];
                    
                }
                if (userInfo.role === "alumno"){
                    entidad= await Alumno.find({email: userInfo.email});
                    entidad=entidad[0];
                    
                }
                
                return res.status(200).json({user:userInfo, token:token,entidad:entidad});
            }
        }
        catch (error) {
            
            return res.status(500).json(error); 
        }
}
       
   
    

const register = async(req, res) => {
    try {
        const newUser = new User(req.body);
        //validarEmail
        if(!validateEmail(newUser.email)){
            return res.status(400).json({message: "Invalid email"})
        }
        //validarPassword
        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: "Invalid pasword"})
        }

        //validar email usado
        if(await usedEmail(newUser.email)){
            return res.status(400).json({message: "Email already used"})
        }
        
        //Encriptar Password
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        newUser.role="admin";
        newUser.isLogged=true;
        const createdUser = await newUser.save();

        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json(error); 
    }
};

const checkSession = (req, res) => {
    try {
        return res.status(201).json(req.user)
    } catch (error) {
        return res.status(500).json(error); 
    }
}

const changePassword = async (req, res) =>{
   
    try {
        const {id} = req.params;
        const {password}=req.body;
        console.log(id);
        
        const userById = await User.find({_id: id});
        console.log(req.body);
        userById[0].password= bcrypt.hashSync(password,10);
        
        userById[0].isLogged=true;

    

        const updatedUser= await User.findByIdAndUpdate(id,userById[0]);
        return res.status(200).json(userById[0]);
    } catch (error) {
        return res.status(500).json(error)
        
    }


}

const getUsers = async (req, res)=>{
    try {
        const allUsers= await User.find();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {login, register, checkSession,changePassword,getUsers}