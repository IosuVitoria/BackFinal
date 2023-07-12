const { generateSign } = require("../../utils/jwt");
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validators");
const Aviso = require("../models/aviso.model");

const getAvisos = async (req, res)=>{
    try {
        const allAvisos= await Aviso.find();
        return res.status(200).json(allAvisos);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const postAviso = async(req,res) => {
    try {
        const newAviso = new Aviso(req.body);
        
      
        const createdAviso = await newAviso.save();
        return res.status(201).json(createdAviso);
    } catch (error) {
        return res.status(500).json(error)
    }

}


module.exports = {getAvisos,postAviso}