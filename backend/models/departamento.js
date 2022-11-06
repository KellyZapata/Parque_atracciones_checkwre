const mongoose = require('mongoose');

let DepartamentoSchema = new  mongoose.Schema({
    nombre: { type: String, required: true },
});

module.exports = mongoose.model('Departamento', DepartamentoSchema, 'departamentos');
