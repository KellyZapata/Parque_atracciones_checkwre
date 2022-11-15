const mongoose = require('mongoose');

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
    recuperar_clave: { type: String, required: false, default: false, unique: true },
    recuperar_clave_exp: { type: Date, required: false},
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuarios');
