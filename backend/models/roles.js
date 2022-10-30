const mongoose = require('mongoose');

let RolSchema = new  mongoose.Schema({
    nombre: { type: String, required: true }
});

module.exports = mongoose.model('Rol', RolSchema, 'rol');
