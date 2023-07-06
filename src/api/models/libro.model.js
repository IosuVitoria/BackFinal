const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librosSchema = new Schema(
    {
        titulo: {type: String, require: true},
        tipo: {type: String, enum: ['Novela', 'Poesía', 'Ensayo', 'Teatro'], required: true},
        genero: {type: String, default: 'Aventuras', enum:['Aventuras', 'Terror', 'Romantico', 'Fantasía']},
        portada: { type:String }
    },{
        timestamps: true
    }
)

const Libro = mongoose.model('libro', librosSchema);

module.exports = Libro;