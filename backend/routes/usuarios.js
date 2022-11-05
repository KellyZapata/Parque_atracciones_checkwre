const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

router.get('/', (req, res) => {
    UsuarioController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    UsuarioController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    UsuarioController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    UsuarioController.Delete(req, res);
});

module.exports = router;
