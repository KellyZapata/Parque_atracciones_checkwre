const mongoose = require('mongoose');

let RolSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
});

module.exports = mongoose.model('Rol', RolSchema, 'roles');
