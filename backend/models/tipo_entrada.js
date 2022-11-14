const mongoose = require('mongoose');

let TipoEntradaSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    valor: { type: Number, required: true },
    parque: { type: mongoose.Schema.Types.ObjectId, ref: 'Parque', required: true },
    cantidad: { type: Number, required: true },
    incremento: { type: Number, required: true },
    cambio_fechas: { type: JSON, required: true }
});

module.exports = mongoose.model('TipoEntrada', TipoEntradaSchema, 'tipos_entradas');
