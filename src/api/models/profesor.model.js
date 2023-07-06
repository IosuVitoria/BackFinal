const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profesorSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellidos: {type: String, required: true},
        email:{type: String, required: true},
        telefono:{type: String}
        
        
    },{
        timestamps: true
    }
)

const Profesor = mongoose.model("profesores", profesorSchema);
module.exports = Profesor;