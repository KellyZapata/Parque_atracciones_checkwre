const mongoose = require('mongoose');

let CiudadSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    departamento: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento', required: true },
});

module.exports = mongoose.model('Ciudad', CiudadSchema, 'ciudades');
