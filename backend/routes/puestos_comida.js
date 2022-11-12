const express = require("express");
const router = express.Router();

const PuestosComidaController = require("../controllers/puestos_comida");

router.post("/", (req, res) => {
    PuestosComidaController.Create(req, res);
});

router.get('/', (req, res) => {
    PuestosComidaController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    PuestosComidaController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    PuestosComidaController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    PuestosComidaController.Delete(req, res);
});

module.exports = router;
