const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const asignaturaSchema = new Schema(
    {
        nombre: {type: String, required: true},      
        profesor: [{type: Schema.Types.ObjectId, ref: 'profesores'}]
    },
    {
        timestamps: true
    }
)

const Asignatura = mongoose.model("asignaturas", asignaturaSchema);
module.exports = Asignatura;