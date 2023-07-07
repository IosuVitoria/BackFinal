const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notaSchema = new Schema(
    {
        nota: {type: Number, required: true},
        asignatura: [{type: Schema.Types.ObjectId, ref: 'asignaturas'}],
        alumno: [{type: Schema.Types.ObjectId, ref: 'alumnos'}],
               
        
    },{
        timestamps: true
    }
)

const Nota = mongoose.model("notas", notaSchema);
module.exports = Nota;