const mongoose = require('mongoose');

let AtraccionesSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: false },
    estatura_min: { type: String, required: true, unique: true },
    video: { type: String, required: true },
    estado: { type: String, required: false }
});

module.exports = mongoose.model('Atraccion', AtraccionesSchema, 'atracciones');
