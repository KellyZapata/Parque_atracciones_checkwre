const express = require("express");
const router = express.Router();

const DepartamentoController = require("../controllers/departamentos");

router.post("/", (req, res) => {
    DepartamentoController.Create(req, res);
});

router.get('/', (req, res) => {
    DepartamentoController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    DepartamentoController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    DepartamentoController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    DepartamentoController.Delete(req, res);
});

module.exports = router;
