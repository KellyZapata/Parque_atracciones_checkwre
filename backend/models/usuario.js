const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let UsuarioSchema = new  mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono_fijo: { type: String, required: false },
    correo_electronico: { type: String, required: true, unique: true },
    telefono_celular: { type: String, required: true },
    clave: { type: String, required: false },
    cargo: { type: String, required: false },
    codigo_autenticacion: { type: String, required: false },
    roles: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Rol' } ],
    recuperar_clave: { type: String, required: false, default: false },
    recuperar_clave_exp: { type: Date, required: false},
});

UsuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuarios');
