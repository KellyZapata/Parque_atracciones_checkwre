const express = require("express");
const router = express.Router();

const AtraccionesController = require("../controllers/atracciones");

router.post("/", (req, res) => {
    AtraccionesController.Create(req, res);
});

router.get('/', (req, res) => {
    AtraccionesController.GetAll(req, res);
});

router.get('/:id', (req, res) => {
    AtraccionesController.GetById(req, res);
});

router.put('/:id', (req, res) => {
    AtraccionesController.Update(req, res);
});

router.delete('/:id', (req, res) => {
    AtraccionesController.Delete(req, res);
});

module.exports = router;
