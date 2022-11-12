const mongoose = require('mongoose');

let PlanesSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    color: { type: String, required: true },
    valor: { type: Number, required: true },
    atracciones_incluidas: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Atraccion', required: true} ],
    ciudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    max_visitantes: { type: Number, required: true },
    logotipo: { type: String, required: false },
    mapa: { type: String, required: false },
    eslogan: { type: String, required: false },
});

module.exports = mongoose.model('Plan', PlanesSchema, 'planes');
