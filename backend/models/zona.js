const mongoose = require('mongoose');

let ZonaSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: false },
    parque: { type: mongoose.Schema.Types.ObjectId, ref: 'Parque', required: true }
});

module.exports = mongoose.model('Zona', ZonaSchema, 'zonas');
