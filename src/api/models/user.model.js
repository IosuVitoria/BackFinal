const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, default: 'alumno', enum: ['admin', 'alumno', 'profesor', 'tutor']},
        isLogged:{type:Boolean, default:false}
    }
)

const User = mongoose.model('user', userSchema);

module.exports = User;