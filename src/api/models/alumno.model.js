const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellidos: {type: String, required: true},
        Curso: {type: String, required: true},
        tutor1: {type: String, required: true},
        tutor2: {type: String},
        tutorCurso: {type: String, required: true},
        asignaturas: [{type: Schema.Types.ObjectId, ref: 'asignaturas'}],
        email: {type: String, required: true}
    },{
        timestamps: true
    }
)

const Alumno = mongoose.model("alumnos", alumnoSchema);
module.exports = Alumno;