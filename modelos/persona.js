const mongoose = require('mongoose');

let PersonaSchema = new  mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    tipoDocumento: { type: String, required: true },
    numeroDocumento: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: false },
    correo: { type: String, required: true },
    celular: { type: String, required: false },
    comprobanteConsignacion: { type: String, required: false },
    codigoICFES: { type: String, required: false },
    familiarEnUniversidad: { type: Boolean, required: false, default: false },
    estrato: { type: Number, required: true },
    tipoColegio : { type: String, required: true }
});

module.exports = mongoose.model('Persona', PersonaSchema, 'personas');
