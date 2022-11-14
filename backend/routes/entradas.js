const express = require("express");
const router = express.Router();

const Entrada = require("../controllers/entradas");

router.post("/", (req, res) => {
    Entrada.Create(req, res);
});

router.get('/', (req, res) => {
    Entrada.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    Entrada.GetById(req, res);
});

router.put('/:id', (req, res) => {
    Entrada.Update(req, res);
});

router.delete('/:id', (req, res) => {
    Entrada.Delete(req, res);
});

module.exports = router;
