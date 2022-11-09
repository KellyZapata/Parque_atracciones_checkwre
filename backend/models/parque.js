const mongoose = require('mongoose');

let ParqueSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    direccion: { type: String, required: false },
    correo_electronico: { type: String, required: true, unique: true },
    ciudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    max_visitantes: { type: String, required: true },
    logotipo: { type: String, required: false },
    mapa: { type: String, required: false },
    eslogan: { type: String, required: false },
});

module.exports = mongoose.model('Parque', ParqueSchema, 'parques');
