const mongoose = require('mongoose');

let EntradaSchema = new  mongoose.Schema({
    valor: { type: Number, required: true },
    tipo_entrada: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoEntrada', required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, required: true },
    valido: { type: Boolean, required: true }
});

module.exports = mongoose.model('Entrada', EntradaSchema, 'entradas');
