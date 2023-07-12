const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const avisoSchema = new Schema(
    {
        aviso: {type: String, required: true},
       
    }
)

const Aviso = mongoose.model('aviso', avisoSchema);

module.exports = Aviso;