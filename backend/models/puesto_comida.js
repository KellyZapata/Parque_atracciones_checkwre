const mongoose = require('mongoose');

let PuestoComidaSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: false },
    zona: { type: mongoose.Schema.Types.ObjectId, ref: 'Zonas', required: true },
    menu: [{ type: String, required: true }]
});

module.exports = mongoose.model('PuestoComida', PuestoComidaSchema, 'puestos_comida');
