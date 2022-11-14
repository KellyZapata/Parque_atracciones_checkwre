const express = require("express");
const router = express.Router();

const TipoEntrada = require("../controllers/tipos_entrada");

router.post("/", (req, res) => {
    TipoEntrada.Create(req, res);
});

router.get('/', (req, res) => {
    TipoEntrada.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    TipoEntrada.GetById(req, res);
});

router.put('/:id', (req, res) => {
    TipoEntrada.Update(req, res);
});

router.delete('/:id', (req, res) => {
    TipoEntrada.Delete(req, res);
});

module.exports = router;
