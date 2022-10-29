const express = require("express");
const router = express.Router();
const Usuario = require("../modelos/usuario");

const UsuarioController = require("../controllers/usuarios");

router.get('/usuarios', (req, res) => {
    UsuarioController.GetAll(req, res);
});

router.get('/usuarios/:id', (req, res) => {
    UsuarioController.GetById(req, res);
});

router.put('/usuarios/:id', (req, res) => {
    UsuarioController.Update(req, res);
});

router.delete('/usuarios/:id', (req, res) => {
    UsuarioController.Delete(req, res);
});

module.exports = router;
